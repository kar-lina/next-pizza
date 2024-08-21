import Link from 'next/link';
import React from 'react';
import { Title } from './title';
import { Button } from '../ui';
import { Plus } from 'lucide-react';

interface Props {
  className?: string;
  id: number;
  price: number;
  imageUrl: string;
  name: string;
}

export const ProductCard: React.FC<Props> = ({ id, price, imageUrl, name, className }) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
        </div>
      </Link>

      <Title text={name} className="mb-1 mt-3 font-bold" size="sm" />
      <p className="text-gray-400 font-normal text-sm mb-6">Острая чоризо, острый перец халапеньо, соус барбекю, митболы, томаты, сладкий перец, красный лук, моцарелла</p>

      <div className="flex items-center justify-between">
        <span className="font-bold text-xl">
          ОТ <b>{price}₽</b>
        </span>
        <Button variant="secondary" className="text-base font-bold">
          <Plus size={20} className="mr-1" />
          Добавить
        </Button>
      </div>
    </div>
  );
};
