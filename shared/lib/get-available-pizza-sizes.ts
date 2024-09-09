import { ProductItem } from '@prisma/client';
import { pizzaSizes, PizzaType } from '../constants/pizza';
import { Variant } from '../components/shared/group-variants';

  /**
   * Returns a list of pizza sizes with a `disabled` property, which is `true` if there are no products with the given pizza type and size.
   * @param type The pizza type to filter by.
   * @param items The list of products to filter.
   * @returns A list of sizes with `name`, `value`, and `disabled` properties.
   */
export const getAvailablePizzaSizes = (type: PizzaType, items: ProductItem[]): Variant[] => {
  const fileredPizzasByType = items.filter((item) => item.pizzaType === type); //
  return pizzaSizes.map((item) => ({ name: item.name, value: item.value, disabled: !fileredPizzasByType.some((pizza) => pizza.size === Number(item.value)) }));
};
