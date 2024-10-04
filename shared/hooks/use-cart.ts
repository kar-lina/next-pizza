import React from "react";
import { useCartStore } from "../store";
import { CreateCartItemValue } from "../services/dto/cart.dto";
import { CartStateItem } from "../lib/get-cart-details-data";
export interface ReturnProps {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  items: CartStateItem[];
  addCartItem: (values: CreateCartItemValue) => Promise<void>;
  fetchCartItems: () => Promise<void>;
  updateItemQuantity: (id: number, quantity: number) => Promise<void>;
  removeCartItem: (id: number) => Promise<void>;
}
export const useCart = (): ReturnProps => {
  const cartState = useCartStore((state) => state);
  React.useEffect(() => {
    cartState.fetchCartItems();
  }, []);
  return cartState;
};