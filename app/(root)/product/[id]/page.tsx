import { Container, GroupVariants, PizzaImage, Title } from '@/shared/components/shared';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';

export default async function ProductPage({ params: { id } }: { params: { id: string } }) {
  const product = await prisma.product.findFirst({ where: { id: Number(id) } });

  if (!product) return notFound();
  return (
    <Container className="my-10 flex flex-col">
      <div className="flex flex-1">
        <PizzaImage imageUrl={product.imageUrl} name={product.name} size={40} />
        <div className="w-[490px] bg-[#f7f6f5] p-7">
          <Title text={product.name} size="md" className="font-extrabold mb-1" />
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquam consequuntur quod, eum voluptatum tenetur ipsa earum sunt eius numquam! Amet provident enim
            accusantium consequatur iusto tempore itaque laborum quia.
          </p>
        </div>
      </div>
    </Container>
  );
}
