import { Cart, CartItem, Ingredient, Product, ProductItem } from '@prisma/client';
export type CartItemDTO = CartItem & {
  productItem?: ProductItem & {
    product: Product;
  };
  ingredients?: Ingredient[]
};

// Здесь типизируем ответ с сервера на получение корзины
export interface CartDTO extends Cart {
  items: CartItemDTO[]
}

export interface CreateCartItemValue {
  productItemId: number;
  ingredientsIds?: number[];
}