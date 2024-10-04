'use client';
import { CheckoutCartItem, CheckoutItemPrice, Container, Title, WhiteBlock } from '@/shared/components/shared';
import { Button, Input, Textarea } from '@/shared/components/ui';
import { useCart } from '@/shared/hooks';
import { ArrowRight, Car, Package, PercentIcon } from 'lucide-react';
import React from 'react';

const CheckoutPage = () => {
  const { totalAmount, items, updateItemQuantity, removeCartItem } = useCart();

  return (
    <Container className="mt-10">
      <Title text="Оформление заказа" size="lg" className="font-extrabold mb-8 text-[36px]" />
      <div className="lg:flex gap-10">
        {/* Левая часть  */}
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <WhiteBlock title="1. Корзина">
            <div className="flex flex-col gap-5">
              <CheckoutCartItem
                id={1}
                name="Пепперони Фреш с пикантными сырочками"
                imageUrl="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                details="тонкое тесто, 32 см"
                price={2000}
                quantity={2}
                onClickRemove={() => {}}
                onClickCountButton={() => {}}
                className="mb-5"
              />
              <CheckoutCartItem
                id={1}
                name="Пепперони Фреш с пикантными сырочками"
                imageUrl="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                details="тонкое тесто, 32 см"
                price={2000}
                quantity={2}
                onClickRemove={() => {}}
                onClickCountButton={() => {}}
                className="mb-5"
              />
            </div>
          </WhiteBlock>
          <WhiteBlock title="1. Персональные данные">
            <form className="grid md:grid-cols-2 gap-5">
              <Input name="firstName" placeholder="Имя" className="text-base" />
              <Input name="lastName" placeholder="Фамилия" className="text-base" />
              <Input name="email" placeholder="E-mail" className="text-base" />
              <Input name="phone" placeholder="Телефон" className="text-base" />
            </form>
          </WhiteBlock>
          <WhiteBlock title="1. Адрес доставки">
            <form className="flex flex-col gap-5">
              <Input name="address" placeholder="Адрес" className="text-base" />
              <Textarea name="comment" placeholder="Комментарий" rows={5} className="text-base" />
            </form>
          </WhiteBlock>
        </div>
        {/* Правая часть */}
        <div className="lg:w-[450px]">
          <WhiteBlock className="p-6 sticky top-4">
            <div className="flex flex-col gap-1">
              <span className="text-xl">Итого:</span>
              <span className="text-[34px] font-extrabold">{totalAmount} ₽</span>
            </div>
            <CheckoutItemPrice title="Стоимость товаров:" value={totalAmount+" ₽"} icon={<Package size={18} />} />
            <CheckoutItemPrice title="Стоимость доставки:" value="250 ₽" icon={<Car size={18} />} />
            <CheckoutItemPrice title="Налоги:" value="250 ₽" icon={<PercentIcon size={18} />} />
            <Button type="submit" className="w-full h-14 rounded-2xl mt-6 text-base font-bold">
              Оформить заказ
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </WhiteBlock>
        </div>
      </div>
    </Container>
  );
};

export default CheckoutPage;
