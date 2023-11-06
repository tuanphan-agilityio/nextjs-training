import { FC, useCallback, useMemo, useRef } from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ToastContainer, toast } from 'react-toastify';
import Head from 'next/head';

import Breadcrumb from '@/components/Breadcrumb';
import ProductInfo from '@/components/ProductInfo';
import ProductTab from '@/components/ProductTab';

import { Pagination } from '@/types/common';
import { CartStorage } from '@/types/cart';
import { Product } from '@/types/product';

import { getProduct, getProducts } from '@/services/product';
import { LocalStorage } from '@/utils/storage';
import { updateCart } from '@/utils/cart/updateCart';
import { STORAGE_KEYS } from '@/constants/storage';
import { TOAST_MESSAGES } from '@/constants/message';

interface ProductDetailProps {
  product: Product;
}

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
    toast.success(TOAST_MESSAGES.UPDATED_CART);
  }, [product.id]);

  const breadcrumbs = useMemo(
    () => [{ label: 'Home', href: '/' }, { label: product.name }],
    [product.name],
  );

  return (
    <>
      <main>
        <Head>
          <title>Product | {product.name}</title>
        </Head>
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
      </main>
      <ToastContainer />
    </>
  );
};

export type { ProductDetailProps };

export default ProductDetail;
