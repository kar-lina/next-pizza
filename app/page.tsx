import { Container, Filters, ProductCard, ProductsGroupList, SortPopup, Title, TopBar } from '@/components/shared';
import { title } from 'process';


export default function Home() {

  return (
    <>
      <Container className="mt-10">
        <Title size="lg" text="Все питсы" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="md:flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                categoryId={0}
                items={[
                  {
                    title: 'Додо Микс',
                    imgUrl: 'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                    id: 1,
                    items: [
                      {
                        id: 1,
                        title: 'Маленькая',
                        price: 769,
                      },
                    ],
                  },
                  {
                    title: 'Додо Микс',
                    imgUrl: 'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                    id: 1,
                    items: [
                      {
                        id: 1,
                        title: 'Маленькая',
                        price: 769,
                      },
                    ],
                  },
                  {
                    title: 'Додо Микс',
                    imgUrl: 'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                    id: 1,
                    items: [
                      {
                        id: 1,
                        title: 'Маленькая',
                        price: 769,
                      },
                    ],
                  },
                  {
                    title: 'Додо Микс',
                    imgUrl: 'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                    id: 1,
                    items: [
                      {
                        id: 1,
                        title: 'Маленькая',
                        price: 769,
                      },
                    ],
                  },
                  {
                    title: 'Додо Микс',
                    imgUrl: 'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                    id: 1,
                    items: [
                      {
                        id: 1,
                        title: 'Маленькая',
                        price: 769,
                      },
                    ],
                  },
                ]}
              />
              <ProductsGroupList
                title="Комбо"
                categoryId={1}
                items={[
                  {
                    title: 'Додо Микс',
                    imgUrl: 'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                    id: 1,
                    items: [
                      {
                        id: 1,
                        title: 'Маленькая',
                        price: 769,
                      },
                    ],
                  },
                  {
                    title: 'Додо Микс',
                    imgUrl: 'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                    id: 1,
                    items: [
                      {
                        id: 1,
                        title: 'Маленькая',
                        price: 769,
                      },
                    ],
                  },
                  {
                    title: 'Додо Микс',
                    imgUrl: 'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                    id: 1,
                    items: [
                      {
                        id: 1,
                        title: 'Маленькая',
                        price: 769,
                      },
                    ],
                  },
                  {
                    title: 'Додо Микс',
                    imgUrl: 'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                    id: 1,
                    items: [
                      {
                        id: 1,
                        title: 'Маленькая',
                        price: 769,
                      },
                    ],
                  },
                  {
                    title: 'Додо Микс',
                    imgUrl: 'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                    id: 1,
                    items: [
                      {
                        id: 1,
                        title: 'Маленькая',
                        price: 769,
                      },
                    ],
                  },
                ]}
              />
              <ProductsGroupList
                title="Закуски"
                categoryId={2}
                items={[
                  {
                    title: 'Додо Микс',
                    imgUrl: 'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                    id: 1,
                    items: [
                      {
                        id: 1,
                        title: 'Маленькая',
                        price: 769,
                      },
                    ],
                  },
                  {
                    title: 'Додо Микс',
                    imgUrl: 'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                    id: 1,
                    items: [
                      {
                        id: 1,
                        title: 'Маленькая',
                        price: 769,
                      },
                    ],
                  },
                  {
                    title: 'Додо Микс',
                    imgUrl: 'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                    id: 1,
                    items: [
                      {
                        id: 1,
                        title: 'Маленькая',
                        price: 769,
                      },
                    ],
                  },
                  {
                    title: 'Додо Микс',
                    imgUrl: 'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                    id: 1,
                    items: [
                      {
                        id: 1,
                        title: 'Маленькая',
                        price: 769,
                      },
                    ],
                  },
                  {
                    title: 'Додо Микс',
                    imgUrl: 'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                    id: 1,
                    items: [
                      {
                        id: 1,
                        title: 'Маленькая',
                        price: 769,
                      },
                    ],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
