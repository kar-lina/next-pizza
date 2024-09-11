import { create } from 'zustand';
import { PizzaSize, PizzaType } from '../constants/pizza';
import { Ingredient } from '@prisma/client';
import { Api } from '../services/api-client';
import { getCartDetailsData } from '../lib';
export type ICartItem = {
  id: number;
  quantity: number;
  price: number;
  name: string;
  imageUrl: string;
  pizzaSize?: PizzaSize | null;
  type?: PizzaType | null;
  ingredients?: Pick<Ingredient, 'name' | 'price'>[];
};
export interface CartState {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  items: ICartItem[];
  fetchCartItems: () => Promise<void>;
  updateItemQuantity: (id: number, quantity: number) => Promise<void>;
  // !!!!TODO типизировать values
  addCartItem: (values: any) => Promise<void>;
  removeCartItem: (id: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set) => ({
  loading: false,
  error: false,
  totalAmount: 0,
  items: [],
  fetchCartItems: async () => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.fetchCart();
      set(getCartDetailsData(data));
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
  removeCartItem: async (id) => {},
  updateItemQuantity: async (id, quantity) => {},
  addCartItem: async (valuse) => {},
}));
