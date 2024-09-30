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
const DEFAULT_MAX_PRICE = 1000;

export const getPizzas = async (params: GetSearchParams) => {
  const sizes =  params.sizes?.split(',').map(Number);
  const pizzaTypes = params.pizzaTypes?.split(',').map(Number);
  const ingredients = params.ingredients?.split(',').map(Number);

  const minPrice = Number(params.priceFrom) || DEFAULT_MIN_PRICE;
  const maxPrice = Number(params.priceTo) || DEFAULT_MAX_PRICE;

  const query = params.query || '';

  const categories = await prisma.category.findMany({
    include: {
      // include - включает в себя связи таблицы с другими таблицами
      products: {
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
              // только по цене продук
              price: { gte: minPrice, lte: maxPrice },
              pizzaType: { in: pizzaTypes },
            },
          },
        },
        include: {
          //
          items: {
            where: {
              price: { gte: minPrice, lte: maxPrice },
            },
            orderBy: {
              price: 'asc',
            }
          },
          ingredients: true,
        },
        // сортирует айтемсы продукта когда возвращает по возрастанию цены
        orderBy: {
          id: 'desc',
        },
      },
    },
  });
  return categories;
}