import { cn } from '@/shared/lib/utils';
import React from 'react';
// import { CartItemDetailsImage, CartItemInfo } from '.';
import * as CartItem from './cart-item-details';
import { CartItemProps } from './cart-item-details/cart-item-details.types';
import { CountButton } from './count-button';
import { Trash2Icon } from 'lucide-react';

interface Props extends CartItemProps {
  className?: string;
}

export const CartDrawerItem: React.FC<Props> = ({id, name, imageUrl, details, price, quantity, className }) => {
  return (
    <div className={cn('flex bg-white p-5 gap-6 ', className)}>
      <CartItem.Image src={imageUrl} />
      <div className="flex-1">
        <CartItem.Info name={name} details={details} />
        <hr className="my-2" />
        <div className="flex justify-between items-center">
          <CountButton onClick={(type) => console.log(type)} value={quantity} />
          <div className="flex gap-3 items-center">
            <CartItem.Price value={price} />
            <Trash2Icon className='text-gray-400 cursor-pointer hover:text-gray-600' size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};
