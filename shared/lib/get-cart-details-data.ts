// import { Cart, Ingredient } from "@prisma/client";
import { CartDTO } from "../services/dto/cart.dto";
import { calcCartItemTotalPrice } from "./calc-cart-item-total-price";

export type CartStateItem = {
  id: number;
  quantity: number;
  price: number;
  name?: string;
  imageUrl?: string;
  disabled?: boolean
  pizzaSize?: number |string | null;
  pizzaType?:  number |string  | null;
  ingredients?: Array<{name: string; price: number}>;
};
interface ReturnProps {
  items: CartStateItem[];
  totalAmount: number;
}
export const getCartDetailsData = (data: CartDTO): ReturnProps => {
  const items = data.items.map((item) => {
    return {
      id: item.id,
      quantity: item.quantity,
      price: calcCartItemTotalPrice(item),
      name: item?.productItem?.product.name,
      imageUrl: item?.productItem?.product.imageUrl,
      pizzaSize: item?.productItem?.size,
      pizzaType: item?.productItem?.pizzaType,
      ingredients: item.ingredients,
      disabled: false,
    };
  }) as CartStateItem[]
  return {
    totalAmount: data.totalAmount,
    items,
  };
};
