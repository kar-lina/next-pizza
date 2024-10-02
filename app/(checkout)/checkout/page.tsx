import { Container, Title, WhiteBlock } from '@/shared/components/shared';
import { Input } from '@/shared/components/ui';
import React from 'react';

const CheckoutPage = () => {
  return (
    <Container className="mt-10">
      <Title text="Оформление заказа" size="lg" className="font-extrabold mb-8 text-[36px]" />
      <div className="flex gap-10">
        {/* Левая часть  */}
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <WhiteBlock title="1. Корзина">123123</WhiteBlock>
          <WhiteBlock title="1. Персональные данные">
            <form className="grid grid-cols-2 gap-5">
              <Input name="firstName" placeholder="Имя" className="text-base" />
              <Input name="lastName" placeholder="Фамилия" className="text-base" />
              <Input name="email" placeholder="E-mail" className="text-base" />
              <Input name="phone" placeholder="Телефон" className="text-base" />
            </form>
          </WhiteBlock>
        </div>
        {/* Правая часть */}
        <div className="w-[450px]">12312313</div>
      </div>
    </Container>
  );
};

export default CheckoutPage;
