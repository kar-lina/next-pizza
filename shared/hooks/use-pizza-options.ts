import React from 'react';
import { PizzaSize, PizzaType } from '../constants/pizza';
import { useSet } from 'react-use';
import { getAvailablePizzaSizes } from '../lib';
import { ProductItem } from '@prisma/client';
import { Variant } from '../components/shared/group-variants';

interface ReturnProps {
  type: PizzaType;
  size: PizzaSize;
  selectedIngredients: Set<number>;
  avalablePizzaSizes: Variant[];
  setType: (type: PizzaType) => void;
  setSize: (size: PizzaSize) => void;
  addIngredient: (id: number) => void;
}
export const usePizzaOptions = (items: ProductItem[]): ReturnProps => {
  const [type, setType] = React.useState<PizzaType>(1);
  const [size, setSize] = React.useState<PizzaSize>(20);
  const [selectedIngredients, { toggle: addIngredient }] = useSet(new Set<number>([]));
  const avalablePizzaSizes = getAvailablePizzaSizes(type, items);

  React.useEffect(() => {
    const isAvalableSize = avalablePizzaSizes.find((item) => Number(item.value) === size && !item.disabled);
    const firstAvalibleSize = avalablePizzaSizes.find((item) => !item.disabled);
    if (!isAvalableSize && firstAvalibleSize) setSize(Number(firstAvalibleSize.value) as PizzaSize);
  }, [type, avalablePizzaSizes]);

  return { type, size, setType, setSize, avalablePizzaSizes, selectedIngredients, addIngredient };
};
