import { prisma } from '@/prisma/prisma-client';
import { updateCartTotalAmount } from '@/shared/lib/update-cart-total-amount';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id);
    const body = (await req.json()) as { quantity: number };
    const token = req.cookies.get('cartToken')?.value;
    if (!token) {
      return NextResponse.json({ message: 'Cart Token not found' });
    }
    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id,
      },
    });
    if (!cartItem) {
      return NextResponse.json({ message: 'Cart item not found' });
    }
    await prisma.cartItem.update({
      where: {
        id,
      },
      data: {
        quantity: body.quantity,
      },
    });
    const updatedCartItem = await updateCartTotalAmount(token);
    return NextResponse.json(updatedCartItem);
  } catch (error) {
    console.log('CART_ID_GET', error);
    return NextResponse.json({ message: 'Не удалось обновить корзину' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id);

    const token = req.cookies.get('cartToken')?.value;
    if (!token) {
      return NextResponse.json({ message: 'Cart Token not found' });
    }

    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id,
      },
    });
    if (!cartItem) {
      return NextResponse.json({ message: 'Cart item not found' });
    }
    await prisma.cartItem.delete({
      where: {
        id,
      },
    });
    const updatedCartItem = await updateCartTotalAmount(token);
    return NextResponse.json(updatedCartItem);
  } catch (error) {
    console.log('CART_ID_PATCH', error);

    return NextResponse.json({ message: 'Не удалось удалить корзину' }, { status: 500 });
  }
}
