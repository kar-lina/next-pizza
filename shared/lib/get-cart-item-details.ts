import { Ingredient } from "@prisma/client";
import { mapPizzaType, PizzaSize, PizzaType } from "../constants/pizza";
import { CartStateItem } from "./get-cart-details-data";

export const getCartItemDetails = (ingredients: CartStateItem['ingredients'], pizzaSize?: PizzaSize, pizzaType?: PizzaType ) => {
  const details = [];

  if (pizzaSize && pizzaType) {
    const typeName = mapPizzaType[pizzaType];
    details.push(`${pizzaSize} см`);
    details.push(`${typeName} тесто`);
  }
  if (ingredients) {
    details.push(...ingredients.map((ingredient) => ingredient?.name));
  }
  return details.join(', ');
};
