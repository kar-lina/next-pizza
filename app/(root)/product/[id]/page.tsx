import { Container, ProductForm } from '@/shared/components/shared';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';
export default async function ProductPage({ params: { id } }: { params: { id: string } }) {
  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      ingredients: true,
      items: true,
      // получаем категорию продукта со всеми продуктами из этой категории для рекомендаций (но желательно сделать отдельным запросом)
      // чтобы пользователь получал минимум необходимой информации - например в useEffect
      category: {
        include: {
          products: {
            include: {
              items: true,
            },
          },
        },
      },
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="my-10 flex flex-col">
      <ProductForm product={product} isModal={false} />
    </Container>
  );
}
