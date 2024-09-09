import { Ingredient, ProductItem } from "@prisma/client";
import { PizzaSize, PizzaType } from "../constants/pizza";

/**
 * Calculates the total price of a selected pizza item
 *
 * @param type - the type of pizza's dough
 * @param size - the size of the pizza
 * @param items - the list of product items (variants)
 * @param ingredients - the list of ingredients
 * @param selectedIngredients - the set of IDs of the selected ingredients
 * @returns the total price of the pizza
 */
export const calcTotalPizzaPrice = (type: PizzaType, size: PizzaSize, items: ProductItem[], ingredients: Ingredient[], selectedIngredients: Set<number>) => {
  const pizzaPrice = items.find((item) => item.size === size && item.pizzaType === type)?.price || 0;
  const totalIngredientsPrice = ingredients.filter((ingredient) => selectedIngredients.has(ingredient.id)).reduce((acc, ingredient) => acc + (ingredient.price || 0), 0);
  return pizzaPrice + totalIngredientsPrice;
};
