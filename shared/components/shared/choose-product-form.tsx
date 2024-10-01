import { cn } from '@/shared/lib/utils';
import React from 'react';
import { Button } from '../ui';
import { Title } from './title';
import { Dialog, DialogTitle } from '@radix-ui/react-dialog';

interface Props {
  name: string;
  imageUrl: string;
  price: number;
  className?: string;
  loading?: boolean;
  onSubmit?: VoidFunction;
  isModal?: boolean;
}

export const ChooseProductForm: React.FC<Props> = ({ name, imageUrl, price, loading, onSubmit, className, isModal }) => {
  return (
    <div className={cn('flex flex-1', className)}>
      <div className={cn('relative flex items-center justify-center flex-1 w-full')}>
        <img src={imageUrl} alt={name} className="relative left-2 top-2 trasition-all z-10 duration-300 w-[350px] h-[350px]" />
      </div>
      <div className="w-[490px] bg-[#f7f6f5] p-7">
        {isModal ? <DialogTitle className="font-extrabold mb-1">{name}</DialogTitle> : <Title text="Добавить в корзину" className="font-extrabold mb-1" />}

        <Button loading={loading} className="w-full р-[55px] text-base rounded-2xl mt-10" onClick={onSubmit}>
          Добавить в корзину за {price} ₽
        </Button>
      </div>
    </div>
  );
};
