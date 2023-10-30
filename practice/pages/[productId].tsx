import { FC, useCallback, useMemo, useRef } from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

import Breadcrumb from '@/components/Breadcrumb';
import ProductInfo from '@/components/ProductInfo';
import ProductCard from '@/components/ProductCard';
import ProductTab from '@/components/ProductTab';

import { Pagination } from '@/types/common';
import { CartStorage } from '@/types/cart';
import { Product } from '@/types/product';

import { getProduct, getProducts } from '@/services/product';
import { LocalStorage } from '@/utils/storage';
import { STORAGE_KEYS } from '@/constants/storage';

interface ProductDetailProps {
  product: Product;
}

const updateCart = (
  cart: CartStorage[],
  productId: number,
  quantity: number,
): CartStorage[] => {
  const existingProductIndex = cart.findIndex(
    (cartProduct) => cartProduct.productId === productId,
  );

  if (existingProductIndex !== -1) {
    cart[existingProductIndex].quantity += quantity;
  } else {
    cart.push({
      productId: productId,
      quantity: quantity,
    });
  }

  return cart;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const params: Pagination = { _page: 1, _limit: 4 };
  const products = await getProducts(params);

  const paths = products.map((product) => ({
    params: { productId: String(product.id) },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<ProductDetailProps> = async ({
  params,
}: GetStaticPropsContext) => {
  const productId = params?.productId;
  if (!productId) return { notFound: true };

  try {
    const data = await getProduct(String(productId));

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        product: data ?? {},
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

const ProductDetail: FC<ProductDetailProps> = ({ product }) => {
  const counterRef = useRef(1);

  const handleQuantityChange = useCallback((quantity: number) => {
    counterRef.current = quantity;
  }, []);

  const handleClickCart = useCallback(() => {
    const productId = product.id;
    const cart: CartStorage[] = LocalStorage.load(STORAGE_KEYS.CART) ?? [];

    const updatedCart = updateCart(cart, productId, counterRef.current);

    LocalStorage.save(STORAGE_KEYS.CART, updatedCart);
  }, [product.id]);

  const breadcrumbs = useMemo(
    () => [{ label: 'Home', href: '/' }, { label: product.name }],
    [product.name],
  );

  return (
    <main>
      <div className='container py-10'>
        <Breadcrumb className='text-secondary' items={breadcrumbs} />
      </div>
      <ProductInfo
        product={product}
        onQuantityChange={handleQuantityChange}
        onAddToCard={handleClickCart}
      />

      <div className='my-20 py-10 bg-quinary'>
        <ProductTab />
      </div>

      <div className='container'>
        <h2 className='mb-10 font-secondary-bold text-center text-3xl leading-8'>
          Same Product
        </h2>

        <article className='flex flex-wrap gap-10 pb-10'>
          {Array(8)
            .fill(null)
            .map((_, index) => (
              <ProductCard
                key={index}
                id={index}
                imgHref='/images/product-1.jpg'
                name='Smart T-Shirt'
                status='Best quality'
                price={40}
              />
            ))}
        </article>
      </div>
    </main>
  );
};

export default ProductDetail;
