import { cn } from '@/shared/lib/utils';
import { CircleCheck } from 'lucide-react';
import React from 'react';

interface Props {
  imageUrl: string;
  name: string;
  price: number;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export const IngredientItem: React.FC<Props> = ({ imageUrl, name, price, active, onClick, className }) => {
  return (
    <div
      className={cn('flex flex-col items-center p-1 text-center relative cursor-pointer shadow-md rounded-xl bg-white', active && 'border-2 border-primary', className)}
      onClick={onClick}>
      {active && <CircleCheck className="absolute top-2 left-2  text-primary" />}
      <img className="w-24 h-24" src={imageUrl} alt={name} />
      <span className="text-gray-400">{name}</span>
      <span className="font-extrabold">{price} ₽</span>
    </div>
  );
};
