import { cn } from '@/shared/lib/utils';
import React from 'react';
import { Button } from '../ui';
import { DialogTitle } from '@radix-ui/react-dialog';
import { PizzaSize, PizzaType, pizzaTypes } from '@/shared/constants/pizza';
import { Ingredient, ProductItem } from '@prisma/client';
import { IngredientItem, GroupVariants, PizzaImage } from './';
import {  getPizzaDetails } from '@/shared/lib';
import { usePizzaOptions } from '@/shared/hooks';

interface Props {
  name: string;
  imageUrl: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  className?: string;
  onSumbit?: (itemId: number, ingredients: number[]) => void;
}

export const ChoosePizzaForm: React.FC<Props> = ({ name, imageUrl, ingredients, items, onSumbit, className }) => {
  const { type, size, setType, setSize, selectedIngredients, currentItemId, addIngredient, avalablePizzaSizes } = usePizzaOptions(items);
  const { totalPrice, textDetails } = getPizzaDetails(type, size, items, ingredients, selectedIngredients);
  const handleClickAddCart = () => {
    if(!currentItemId) return
    onSumbit?.(currentItemId, Array.from(selectedIngredients));
    console.log({ size, type, selectedIngredients, totalPrice });
  };
  return (
    <div className={cn('flex flex-1', className)}>
      <PizzaImage name={name} imageUrl={imageUrl} size={size} />

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <DialogTitle className="font-extrabold mb-1">{name}</DialogTitle>
        <p className="text-gray-400">{textDetails}</p>

        <GroupVariants className="mt-5" value={String(size)} items={avalablePizzaSizes} onClick={(value) => setSize(Number(value) as PizzaSize)} />
        <GroupVariants className="mt-4" value={String(type)} items={pizzaTypes} onClick={(value) => setType(Number(value) as PizzaType)} />

        <div className="mt-4 p-2 bg-gray-50 rounded-md h-[420px] overflow-auto scrollbar">
          <div className="grid grid-cols-3 gap-2">
            {ingredients.map((ingredient) => (
              <IngredientItem key={ingredient.id} {...ingredient} onClick={() => addIngredient(ingredient.id)} active={selectedIngredients.has(ingredient.id)} />
            ))}
          </div>
        </div>

        <Button className="w-full р-[55px] text-base rounded-2xl mt-10" onClick={handleClickAddCart}>
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
