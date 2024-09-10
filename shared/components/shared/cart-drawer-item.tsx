import { cn } from '@/shared/lib/utils';
import React from 'react';
import { CartItemDetailsImage, CartItemInfo } from '.';
// import { CartItemInfo } from './cart-item-details/cart-item-info';

interface Props {
className?: string;
}

export const CartDrawerItem: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex bg-white p-5 gap-6 ', className)}>
    <CartItemDetailsImage src={imageUrl} />
    <CartItemInfo
    </div>
  );
};