import { Container, GroupVariants, ProductImage, Title } from '@/components/shared';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';

export default async function ProductPage({ params: { id } }: { params: { id: string } }) {
  const product = await prisma.product.findFirst({ where: { id: Number(id) } });

  if (!product) return notFound();
  return (
    <Container className="my-10 flex flex-col">
      <div className="flex flex-1">
        <ProductImage imgUrl={product.imageUrl} name={product.name} size={40} />
        <div className="w-[490px] bg-[#f7f6f5] p-7">
          <Title text={product.name} size="md" className="font-extrabold mb-1" />
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquam consequuntur quod, eum voluptatum tenetur ipsa earum sunt eius numquam! Amet provident enim
            accusantium consequatur iusto tempore itaque laborum quia.
          </p>
          <GroupVariants
            items={[
              { name: 'тонкое', value: '1' },
              { name: 'традиционное', value: '2' },
            ]}
          />
          <GroupVariants
            selectedValue='2'
          
            items={[
              { name: 'Малкенькая', value: '1' },
              { name: 'Средняя', value: '2' },
              { name: 'Большая', value: '3', disabled: true },
            ]}
          />
        </div>
      </div>
    </Container>
  );
}
