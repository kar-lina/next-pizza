import { cn } from '@/shared/lib/utils';
import React from 'react';
import { GroupVariants } from './group-variants';
import { Button } from '../ui';
import { DialogTitle } from '@radix-ui/react-dialog';

interface Props {
  name: string;
  imageUrl: string;
  className?: string;
  onCLickAdd?: VoidFunction;
}

export const ChooseProductForm: React.FC<Props> = ({ name, imageUrl, onCLickAdd, className }) => {
  const textDetails = 'Подробнее о пицце можно посмотреть в карточке пиццы';
  const totalPrice = 500;
  return (
    <div className={cn('flex flex-1', className)}>
      <div className={cn('relative flex items-center justify-center flex-1 w-full')}>
        <img
          src={imageUrl}
          alt={name}
          className='relative left-2 top-2 trasition-all z-10 duration-300 w-[350px] h-[350px]'
        />
      </div>
      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <DialogTitle className="font-extrabold mb-1">
         {name} 
        </DialogTitle>
        <p className="text-gray-400">{textDetails}</p>

        <GroupVariants
          selectedValue="2"
          items={[
            { name: 'Малкенькая', value: '1' },
            { name: 'Средняя', value: '2' },
            { name: 'Большая', value: '3', disabled: true },
          ]}
        />

        <Button className="w-full р-[55px] text-base rounded-2xl mt-10" onClick={onCLickAdd}>
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
