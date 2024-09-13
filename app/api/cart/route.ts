import { prisma } from '@/prisma/prisma-client';
import { findOrCreateCart } from '@/shared/lib/find-or-create-cart';
import { updateCartTotalAmount } from '@/shared/lib/update-cart-total-amount';
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
      token = crypto.randomUUID();
    }

    const userCart = await findOrCreateCart(token);
    console.log('tokrn', token, 'userCart', userCart.id)

    const data = (await req.json()) as CreateCartItemValue;
    const findCartItem = await prisma.cartItem.findFirst({
      where: {
        cartId: userCart.id,
        productItemId: Number(data.productItemId),
        ingredients: { every: { id: { in: data.ingredientsIds } } },
      },
    });
    // Если товар найден => увеличиваем его количество
    if (findCartItem) {
      await prisma.cartItem.update({
        where: {
          id: findCartItem.id,
        },
        data: {
          quantity: findCartItem.quantity + 1,
        },
      });
    } else {
      // Если товар не нашелся => создаем новый
      await prisma.cartItem.create({
        data: {
          cartId: userCart.id,
          productItemId: Number(data.productItemId),
          quantity: 1,
          ingredients: { connect: data.ingredientsIds?.map((id) => ({ id: Number(id) })) },
        },
      });
    }

    const updatedUserCart = await updateCartTotalAmount(token);
    console.log('[POST] updatedUserCart', updatedUserCart);
    const responseWithToken = NextResponse.json(updatedUserCart);
    responseWithToken.cookies.set('cartToken', token);
    return responseWithToken;
  } catch (error) {
    console.log('[CART_POST] Server error', error);
    return NextResponse.json({ message: 'Не создать корзину' }, { status: 500 });
  }
}
