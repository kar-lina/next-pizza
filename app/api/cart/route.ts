import { prisma } from '@/prisma/prisma-client';
import { findOrCreateCart } from '@/shared/lib/find-or-create-cart';
import { CreateCartItemValue } from '@/shared/services/dto/cart.dto';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get('cartToken')?.value;

    if (!token) {
      return NextResponse.json({ totalAmount: 0, items: [] });
    }

    const userCart = await prisma.cart.findFirst({
      where: {
        // находит корзин у которой есть  такой пользователь или токен
        OR: [{ token }],
      },
      include: {
        // возвращает все корзину со всеми продуктами (включая сами продукты и их ингредиенты)
        items: {
          orderBy: { createdAt: 'desc' },
          include: {
            productItem: {
              include: {
                product: true,
              },
            },
            ingredients: true,
          },
        },
      },
    });
    return NextResponse.json(userCart);
  } catch (error) {
    console.log('[CART_GET] Server error', error);

    console.log(error);
  }
}

export async function POST(req: NextRequest) {
  try {
    let token = req.cookies.get('cartToken')?.value;
    if (!token) {
      token  = crypto.randomUUID();
    }

    const userCart = await findOrCreateCart(token);

    const data = (await req.json()) as  CreateCartItemValue;
    const findCartItem = await prisma.cartItem.findFirst({
      where: {
        cartId: userCart.id,
        productItemId: Number(data.productItemId),
        ingredients: {every: {id: {in: data.ingredientsIds}}} 

      },
    });
    if (findCartItem) {
      
    }
      return NextResponse.json('');
  } catch (error) {
    console.log('[CART_POST] Server error', error);
    return NextResponse.json({ message: 'Не создать корзину' }, { status: 500 });
  }
}
