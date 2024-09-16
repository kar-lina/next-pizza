import { prisma } from "@/prisma/prisma-client";

export interface GetSearchParams {
  query?: string;
  sortBy?: string;
  sizes?: string;
  pizzaTypes?: string;
  ingredients?: string;
  priceFrom?: number;
  priceTo?: number;
  // page?: number;
  // limit?: string;
}

const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 10000;

export const getPizzas = async (params: GetSearchParams) => {
  const sizes =  params.sizes?.split(',').map(Number);
  const pizzaTypes = params.pizzaTypes?.split(',').map(Number);
  const ingredients = params.ingredients?.split(',').map(Number);

  const priceFrom = Number(params.priceFrom) || DEFAULT_MIN_PRICE;
  const priceTo = Number(params.priceTo) || DEFAULT_MAX_PRICE;
  const query = params.query || '';

  const categories = await prisma.category.findMany({
    include: {
      // include - включает в себя связи таблицы с другими таблицами
      products: {
        orderBy: {
          id: 'desc',
        },
        where: {
          ingredients: ingredients
            ? {
                some: {
                  id: { in: ingredients },
                },
              }
            : undefined,
          items: {
            some: {
              size: { in: sizes },
              // price: { gte: priceFrom, lte: priceTo },
              pizzaType: { in: pizzaTypes },
            },
          }
        },
        include: {
          items: true,
          ingredients: true,
        },
      },
    },
  });
  return categories;
}