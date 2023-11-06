import { Product } from '@/types/product';
import axiosApp from './axiosApp';
import { ENDPOINTS } from '@/constants/endpoints';
import { Pagination } from '@/types/common';

const getProducts = async (params?: Pagination): Promise<Product[]> => {
  const response: Product[] = await axiosApp.get(ENDPOINTS.PRODUCTS, {
    params,
  });

  return response;
};

const getProduct = async (id: string): Promise<Product> => {
  const response: Product = await axiosApp.get(`${ENDPOINTS.PRODUCTS}/${id}`);

  return response;
};

export { getProducts, getProduct };
