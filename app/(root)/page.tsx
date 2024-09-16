import { Container, Filters, ProductsGroupList, Title, TopBar } from '@/shared/components/shared';
import { Suspense } from 'react';
import { getPizzas, GetSearchParams } from '@/shared/lib/find-pizzas';


export default async function Home({ searchParams }: { searchParams: GetSearchParams}) {
  const categories = await getPizzas(searchParams)  

  return (
    <>
      <Container className="mt-10">
        <Title size="lg" text="Все питсы" className="font-extrabold" />
      </Container>
      <TopBar categories={categories.filter((category) => category.products.length > 0)} />
      <Container className="mt-10 pb-14">
        <div className="md:flex gap-[80px]">
          <div className="w-[250px]">
            <Suspense>
              <Filters />
            </Suspense>
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories?.length >0 && categories.map(
                (category) => category.products.length > 0 && <ProductsGroupList key={category.id} title={category.name} categoryId={category.id} items={category.products} />
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
