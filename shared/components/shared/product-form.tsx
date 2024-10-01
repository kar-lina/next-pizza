'use client';
import { ProductWithRelations } from '@/@types/prisma';
import { useCartStore } from '@/shared/store';
import React from 'react';
import toast from 'react-hot-toast';
import { ChoosePizzaForm } from './choose-pizza-form';
import { ChooseProductForm } from './choose-product-form';

interface Props {
  product: ProductWithRelations;
  isModal?: boolean;
  _onSubmit?: VoidFunction;
}

export const ProductForm: React.FC<Props> = ({ product, isModal, _onSubmit }) => {
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
      _onSubmit?.();
    } catch (error) {
      console.log(error);
      toast.success('Ошибка при добавлении: ' + product.name + ' в корзину');
    }
  };

  return isPizzaForm ? (
    <ChoosePizzaForm
      imageUrl={product.imageUrl}
      name={product.name}
      ingredients={product.ingredients}
      items={product.items}
      loading={loading}
      onSumbit={onSubmit}
      isModal={isModal}
    />
  ) : (
    <ChooseProductForm imageUrl={product.imageUrl} name={product.name} price={firstItem.price} loading={loading} onSubmit={onSubmit} isModal={isModal} />
  );
};
