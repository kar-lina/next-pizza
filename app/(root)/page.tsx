import { Container, Filters, ProductsGroupList, Title, TopBar } from '@/shared/components/shared';
import { prisma } from '@/prisma/prisma-client';


export default async function Home() {

  const categories = await prisma.category.findMany({
    include: { // include - включает в себя связи таблицы с другими таблицами
      products: {
        include: {
          items: true,
          ingredients: true,
        }
      }
    }
  });
  

  return (
    <>
      <Container className="mt-10">
        <Title size="lg" text="Все питсы" className="font-extrabold" />
      </Container>
      <TopBar categories={categories.filter((category) => category.products.length > 0)} />
      <Container className="mt-10 pb-14">
        <div className="md:flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map(
                (category) => category.products.length > 0 && <ProductsGroupList key={category.id} title={category.name} categoryId={category.id} items={category.products} />
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
