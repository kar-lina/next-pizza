export const categories = [
  {
    name: 'Пиццы',
  },
  {
    name: 'Завтрак',
  },
  {
    name: 'Закуски',
  },
  {
    name: 'Коктейли',
  },
  {
    name: 'Напитки',
  },
];

export const ingredients = [
  {
    name: 'Сырный бортик',
    price: 179,
    imageUrl: '/assets/images/ingredients/01.png',
  },
  {
    name: 'Сливочная моцарелла',
    price: 79,
    imageUrl: '/assets/images/ingredients/02.png',
  },
  {
    name: 'Сыры чеддер и пармезан',
    price: 79,
    imageUrl: '/assets/images/ingredients/03.png',
  },
  {
    name: 'Острый перец халапеньо',
    price: 59,
    imageUrl: '/assets/images/ingredients/04.png',
  },
  {
    name: 'Нежный цыпленок',
    price: 79,
    imageUrl: '/assets/images/ingredients/05.png',
  },
  {
    name: 'Шампиньоны',
    price: 59,
    imageUrl: '/assets/images/ingredients/06.png',
  },
  {
    name: 'Ветчина',
    price: 79,
    imageUrl: '/assets/images/ingredients/07.png',
  },
  {
    name: 'Пикантная пепперони',
    price: 79,
    imageUrl: '/assets/images/ingredients/08.png',
  },
  {
    name: 'Острая чоризо',
    price: 79,
    imageUrl: '/assets/images/ingredients/09.png',
  },
  {
    name: 'Маринованные огурчики',
    price: 59,
    imageUrl: '/assets/images/ingredients/10.png',
  },
  {
    name: 'Свежие томаты',
    price: 59,
    imageUrl: '/assets/images/ingredients/11.png',
  },
  {
    name: 'Красный лук',
    price: 59,
    imageUrl: '/assets/images/ingredients/12.png',
  },
  {
    name: 'Сочные ананасы',
    price: 59,
    imageUrl: '/assets/images/ingredients/13.png',
  },
  {
    name: 'Итальянские травы',
    price: 39,
    imageUrl: '/assets/images/ingredients/14.png',
  },
  {
    name: 'Сладкий перец',
    price: 59,
    imageUrl: '/assets/images/ingredients/15.png',
  },
  {
    name: 'Кубики брынзы',
    price: 79,
    imageUrl: '/assets/images/ingredients/16.png',
  },
  {
    name: 'Митболы',
    price: 79,
    imageUrl: '/assets/images/ingredients/17.png',
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: 'Омлет с ветчиной и грибами',
    imageUrl: '/assets/images/products/01.webp',
    categoryId: 2,
  },
  {
    name: 'Омлет с пепперони',
    categoryId: 2,
    imageUrl: '/assets/images/products/02.webp',
  },
  {
    name: 'Кофе Латте',
    categoryId: 2,
    imageUrl: '/assets/images/products/03.webp',
  },
  {
    name: 'Дэнвич ветчина и сыр',
    categoryId: 3,
    imageUrl: '/assets/images/products/04.webp',
  },
  {
    name: 'Куриные наггетсы',
    categoryId: 3,
    imageUrl: '/assets/images/products/05.webp',
  },
  {
    name: 'Картофель из печи с соусом 🌱',
    categoryId: 3,
    imageUrl: '/assets/images/products/06.webp',
  },
  {
    name: 'Додстер',
    categoryId: 3,
    imageUrl: '/assets/images/products/07.webp',
  },
  {
    name: 'Острый Додстер 🌶️🌶️',
    imageUrl: '/assets/images/products/08.webp',

    categoryId: 3,
  },
  {
    name: 'Банановый молочный коктейль',
    imageUrl: '/assets/images/products/09.webp',

    categoryId: 4,
  },
  {
    name: 'Карамельное яблоко молочный коктейль',
    imageUrl: '/assets/images/products/10.webp',

    categoryId: 4,
  },
  {
    name: 'Молочный коктейль с печеньем Орео',
    imageUrl: '/assets/images/products/11.webp',

    categoryId: 4,
  },
  {
    name: 'Классический молочный коктейль 👶',
    imageUrl: '/assets/images/products/12.webp',

    categoryId: 4,
  },
  {
    name: 'Ирландский Капучино',
    imageUrl: '/assets/images/products/12.webp',

    categoryId: 5,
  },
  {
    name: 'Кофе Карамельный капучино',
    imageUrl: '/assets/images/products/13.webp',

    categoryId: 5,
  },
  {
    name: 'Кофе Кокосовый латте',
    imageUrl: '/assets/images/products/14.webp',

    categoryId: 5,
  },
  {
    name: 'Кофе Американо',
    imageUrl: '/assets/images/products/15.webp',

    categoryId: 5,
  },
  {
    name: 'Кофе Латте',
    imageUrl: '/assets/images/products/16.webp',

    categoryId: 5,
  },
];
