import { Product } from '@prisma/client';
import { axiosInstance } from './axios';
import { ApiRoutes } from './constance';

export const search = async (query: string) => {
  return (
    await axiosInstance.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, {
      params: {
        query,
      },
    })
  ).data;
};
