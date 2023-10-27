import { Product } from '@/types/product';
import axiosApp from './axiosApp';
import { ENDPOINTS } from '@/constants/endpoints';
import { Pagination } from '@/types/common';

const getProducts = (params?: Pagination) => {
  return axiosApp.get<Product[]>(ENDPOINTS.PRODUCTS, { params });
};

export { getProducts };
