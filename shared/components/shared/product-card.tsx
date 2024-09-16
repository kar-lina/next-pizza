import Link from 'next/link';
import React from 'react';
import { Title } from './title';
import { Button } from '../ui';
import { Plus } from 'lucide-react';
import { Ingredient } from '@prisma/client';

interface Props {
  className?: string;
  id: number;
  price: number;
  imageUrl: string;
  name: string;
  ingredients?: Ingredient[];
}

export const ProductCard: React.FC<Props> = ({ id, price, imageUrl, name, ingredients, className }) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
        </div>
      </Link>

      <Title text={name} className="mb-1 mt-3 font-bold" size="sm" />
      {ingredients && ingredients.length > 0 && <p className="text-gray-400 font-normal text-sm mb-6">{ingredients?.map((ingredient) => ingredient.name).join(', ')}</p>}

      <div className="flex items-center justify-between">
        <span className="font-bold text-xl">
          ОТ <b>{price}₽</b>
        </span>
        <Link href={`/product/${id}`}>
          <Button variant="secondary" className="text-base font-bold">
            {' '}
            <Plus size={20} className="mr-1" />
            Добавить
          </Button>
        </Link>
      </div>
    </div>
  );
};
