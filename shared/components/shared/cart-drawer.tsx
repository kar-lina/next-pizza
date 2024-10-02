'use client';
import React, { PropsWithChildren } from 'react';

interface Props {
  className?: string;
}
import { Sheet, SheetPortal, SheetOverlay, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription } from '@/shared/components/ui/sheet';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '../ui';
import Link from 'next/link';
import { CartDrawerItem } from './cart-drawer-item';
import { getCartItemDetails } from '@/shared/lib';
import { useCartStore } from '@/shared/store';
import { PizzaSize, pizzaSizes, PizzaType } from '@/shared/constants/pizza';
import Image from 'next/image';
import { Title } from './title';

export const CartDrawer: React.FC<PropsWithChildren<Props>> = ({ className, children }) => {
  const [totalAmount, items, fetchCartItems, updateItemQuantity, removeCartItem] = useCartStore((state) => [
    state.totalAmount,
    state.items,
    state.fetchCartItems,
    state.updateItemQuantity,
    state.removeCartItem,
  ]);

  React.useEffect(() => {
    fetchCartItems();
  }, []);

  const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
    const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-[#f4f1ee]">
        {totalAmount > 0 && (
          <SheetHeader>
            <SheetTitle>
              В корзине <span className="font-bold">{items.length} товара</span>
            </SheetTitle>
          </SheetHeader>
        )}
        {totalAmount === 0 && (
          <div className='h-full flex flex-col items-center justify-center w-72 mx-auto'>
            <Image src="/assets/images/empty-box.png" alt="empty cart" width={120} height={120} />
            <Title size="sm" text="Корзина пустая" className='mb-2 font-bold'  />
            <p className='text-center text-neutral-500 mb-5'> 
              Добавьте пиццу в корзину, чтобы она появилась здесь
            </p>
            <SheetClose>
              <Button size='lg' className="w-56 h-12 text-base font-bold">
                <ArrowLeft size={20} className="mr-2" />
                Вернуться назад
              </Button>

            </SheetClose>
          </div>

        )}



        {totalAmount > 0 && (
          <>
            <div className="flex-1 -mx-6 mt-5 scrollbar overflow-auto">
              {items.map((item) => (
                <div className="mb-2" key={item.id}>
                  <CartDrawerItem
                    id={item.id}
                    imageUrl={item.imageUrl ?? ''}
                    details={getCartItemDetails(item.ingredients, item.pizzaSize as PizzaSize, item.pizzaType as PizzaType)}
                    name={item.name ?? ''}
                    price={item.price}
                    quantity={item.quantity}
                    onClickCountButton={(type) => onClickCountButton(item.id, item.quantity, type)}
                    onClickRemove={() => removeCartItem(item.id)}
                    disabled={item.disabled}
                  />
                </div>
              ))}
            </div>

            <SheetFooter className="-mx-6 bg-white p-8">
              <div className="w-full">
                <div className="flex mb-4">
                  <span className="flex flex-1 text-lg text-neutral-500">
                    Итого
                    <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2"></div>
                  </span>
                  <span className="text-lg font-bold"> {totalAmount} ₽</span>
                </div>
                <Link href="/cart">
                  <Button type="submit" className="w-full h-12 text-base">
                    Оформить заказ <ArrowRight className="w-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};
