const mapPizzaSize = {
  20: 'Маленькая',
  30: 'Средняя',
  40: 'Большая',
} as const;

const mapPizzaType ={
  1: 'Традиционное',
  2: 'Тонкое',
} as const;

const pizzaSizes = Object.entries(mapPizzaSize).map(([value, name]) => ({
  name,
  value,
}))
const pizzaTypes = Object.entries(mapPizzaType).map(([value, name]) => ({
  name,
  value,
}));

export { mapPizzaSize, mapPizzaType, pizzaSizes, pizzaTypes };
export type PizzaSize = keyof typeof mapPizzaSize;
export type PizzaType = keyof typeof mapPizzaType;