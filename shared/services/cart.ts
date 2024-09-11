import { Cart } from '@prisma/client';
import { axiosInstance } from './axios';
import { ApiRoutes } from './constants';

export const fetchCart = async (): Promise<Cart> => {
  return (await axiosInstance.get<Cart>(ApiRoutes.CART)).data;
};
