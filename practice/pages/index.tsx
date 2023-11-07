import { FC, useCallback, useState, useMemo } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import SubHeader from '@/components/SubHeader';
import SidebarFilter from '@/components/SidebarFilter';
import ProductCard from '@/components/ProductCard';
import Button from '@/components/Button';

import { Product } from '@/types/product';
import { Pagination } from '@/types/common';
import { getProducts } from '@/services/product';

interface HomeProps {
  products: Product[];
  params: Pagination;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const defaultParams: Pagination = { _page: 1, _limit: 3 };
  const data = await getProducts(defaultParams);

  return {
    props: {
      products: data ?? [],
      params: defaultParams,
    },
  };
};

const Home: FC<HomeProps> = ({ products, params }) => {
  const [productData, setProductData] = useState<{
    products: Product[];
    params: Pagination;
  }>({
    products,
    params: {
      ...params,
      _page: params._page + 1,
    },
  });

  const [isShowLoadMore, setIsShowLoadMore] = useState(true);

  const handleLoadMore = useCallback(async () => {
    const data = await getProducts(productData.params);

    if (data.length > 0) {
      setProductData(({ products, params }) => ({
        products: [...products, ...data],
        params: {
          ...params,
          _page: params._page + 1,
        },
      }));
    } else {
      setIsShowLoadMore(false);
    }
  }, [productData, setProductData]);

  const breadCrumbItems = useMemo(() => [{ label: 'Home', href: '/' }], []);

  return (
    <main>
      <Head>
        <title>Products | T-shirt</title>
      </Head>
      <SubHeader title='Cart' breadcrumbItems={breadCrumbItems} />
      <section className='container py-20 xl:py-16 md:py-12 sm:py-4'>
        <h2 className='mb-6 text-3xl font-secondary-bold'>T - Shirt</h2>
        <div className='flex gap-12 md:flex-col'>
          <SidebarFilter />
          <div className='text-center'>
            <article className='flex flex-wrap gap-10 pb-10 sm:gap-4'>
              {productData.products.map(
                ({ id, name, thumbnail, status, price }) => (
                  <ProductCard
                    key={id}
                    id={id}
                    imgHref={thumbnail}
                    name={name}
                    status={status}
                    price={price}
                  />
                ),
              )}
            </article>
            {isShowLoadMore && (
              <Button className='text-center' onClick={handleLoadMore}>
                Load More
              </Button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export type { HomeProps };

export default Home;
