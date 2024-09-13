import { create } from 'zustand';
import { Api } from '../services/api-client';
import { getCartDetailsData } from '../lib';
import { CartStateItem } from '../lib/get-cart-details-data';
import { CreateCartItemValue } from '../services/dto/cart.dto';

// формат aйтема корзины, не в чистом виде, который возвращается  с сервера, а в формате, который нужен для UI

export interface CartState {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  items: CartStateItem[];

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
  removeCartItem: async (id) => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.removeCartItem(id);
      set(getCartDetailsData(data));
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }

  },
  updateItemQuantity: async (id, quantity) => {
     try {
       set({ loading: true, error: false });
       const data = await Api.cart.updateItemQuantity(id, quantity);
       set(getCartDetailsData(data));
     } catch (error) {
       console.log(error);
       set({ error: true });
     } finally {
       set({ loading: false });
     }
  },
  addCartItem: async (values: CreateCartItemValue) => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.addCartItem(values);
      set(getCartDetailsData(data));
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));
