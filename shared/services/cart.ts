import { axiosInstance } from './axios';
import { ApiRoutes } from './constants';
import { CartDTO } from './dto/cart.dto';

export const fetchCart = async (): Promise<CartDTO> => {
  return (await axiosInstance.get<CartDTO>(ApiRoutes.CART)).data;
};

export const updateItemQuantity = async (itemId: number, quantity: number): Promise<CartDTO> => {
  return (await axiosInstance.patch<CartDTO>(ApiRoutes.CART + `/${itemId}`, { quantity })).data;
};

export const removeCartItem = async (itemId: number): Promise<CartDTO> => {
  return (await axiosInstance.delete<CartDTO>(ApiRoutes.CART + `/${itemId}`)).data;
};
