'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { useSet } from 'react-use';

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

interface QueryFilters extends PriceProps {
  pizzaTypes: string;
  sizes: string;
  ingredients: string;
}
export interface Filters {
  prices: PriceProps;
  sizes: Set<string>;
  pizzaTypes: Set<string>;
  selectedIngredients: Set<string>;
}

interface ReturnProps extends Filters {
  setPrices: (name: keyof PriceProps, value: number) => void;

  setSelectedIngredients: (ids: string[]) => void;
  setIngredients: (id: string) => void;
  setSizes: (id: string) => void;
  // setPrices: (id: string) => void;
  setPizzaTypes: (id: string) => void;
}
export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;

  // Ingredients filter
  const [selectedIngredients, { add, toggle: toggleIngredients }] = useSet(new Set<string>(searchParams.get('ingredients')?.split(',') || []));

  const setSelectedIngredients = (ids: string[]) => {
    ids.forEach(add);
  };

  // Price filter
  const [prices, setPrices] = React.useState<PriceProps>({
    priceFrom: Number(searchParams.get('priceFrom')) || undefined,
    priceTo: Number(searchParams.get('priceTo')) || undefined,
  });
  const updatePrices = (name: keyof PriceProps, value: number) => {
    setPrices((prev) => ({ ...prev, [name]: value }));
  };

  // Sizes filter
  const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>(searchParams.get('sizes')?.split(',') || []));

  // Pizza types  filter
  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>(searchParams.get('pizzaTypes')?.split(',') || []));
  return React.useMemo(
    () => ({
      prices,
      setPrices: updatePrices,
      // updatePrices,
      sizes,
      setSizes: toggleSizes,
      pizzaTypes,
      setPizzaTypes: togglePizzaTypes,
      selectedIngredients,
      setSelectedIngredients,
      setIngredients: toggleIngredients,
    }),
    [sizes, pizzaTypes, selectedIngredients, prices]
  );
  // return {
  //   prices,
  //   setPrices: updatePrices,
  //   // updatePrices,
  //   sizes,
  //   setSizes: toggleSizes,
  //   pizzaTypes,
  //   setPizzaTypes: togglePizzaTypes,
  //   selectedIngredients,
  //   setSelectedIngredients,
  //   setIngredients: toggleIngredients,
  // };
};
