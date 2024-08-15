import { Ingredient, Product } from '@prisma/client';
import { axiosInstance } from './axios';
import { ApiRoutes } from './constance';

export const getAll = async () => {
  return (await axiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS)).data;
};
