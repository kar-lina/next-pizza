'use client';
import { Dialog } from '@/shared/components/ui';
import { DialogContent } from '@/shared/components/ui/dialog';
import React from 'react';
import { cn } from '@/shared/lib/utils';
import { useRouter } from 'next/navigation';
import { ChooseProductForm } from '../choose-product-form';
import { ProductWithRelations } from '@/@types/prisma';
import { ChoosePizzaForm } from '../choose-pizza-form';
import { useCartStore } from '@/shared/store';
import toast from 'react-hot-toast';

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();
  const firstItem = product?.items[0];
  const isPizzaForm = Boolean(firstItem?.pizzaType);
  const [loading, addCartItem] = useCartStore((state) => [state.loading, state.addCartItem]);

  const onSubmit = async (pizzaItemId?: number, ingredientsIds?: number[]) => {
    try {
      if (isPizzaForm && pizzaItemId) {
        await addCartItem({
          productItemId: pizzaItemId,
          ingredientsIds,
        });
      } else {
        await addCartItem({
          productItemId: firstItem.id,
        });
      }
      toast.success(product.name + ' в корзине');
      router.back();
    } catch (error) {
      console.log(error);
      toast.success('Ошибка при добавлении: ' + product.name + ' в корзину');
    }
  };

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent aria-describedby={undefined} className={cn('p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden', className)}>
        {isPizzaForm ? (
          <ChoosePizzaForm imageUrl={product.imageUrl} name={product.name} ingredients={product.ingredients} items={product.items} loading={loading} onSumbit={onSubmit} />
        ) : (
          <ChooseProductForm imageUrl={product.imageUrl} name={product.name} price={firstItem.price} loading={loading} onSubmit={onSubmit} />
        )}
      </DialogContent>
    </Dialog>
  );
};
