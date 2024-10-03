'use client';
import React from 'react';
import { CartItemProps } from './cart-item-details/cart-item-details.types';
import { cn } from '@/shared/lib/utils';
import * as CartItem from './cart-item-details';
import { X } from 'lucide-react';

interface Props extends CartItemProps {
  onClickRemove: () => void;
  onClickCountButton: (type: 'plus' | 'minus') => void;
  className?: string;
}

export const CheckoutCartItem: React.FC<Props> = ({ name, imageUrl, details, price, quantity, onClickRemove, onClickCountButton, className }) => {
  return (
    <div className={cn('flex items-center justify-between', className)}>
      <div className="flex gap-5 items-center">
        <CartItem.Image src={imageUrl} />
        <CartItem.Info name={name} details={details} />
      </div>
      <CartItem.Price value={price} className="flex-shrink-0" />

      <div className="flex -tems-center gap-5 ml-20">
        <CartItem.CountButton onClick={onClickCountButton} value={quantity} />
        <button onClick={onClickRemove}>
          <X className="text-gray-400 cursor-pointer hover:text-gray-600" size={20} />
        </button>
      </div>
    </div>
  );
};
