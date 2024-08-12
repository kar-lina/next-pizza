
'use client';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';

import React from 'react';

interface Props {
  className?: string;
}
const categories = [
  {id: 1, title: 'Пиццы'},
  {id: 2, title: 'Комбо'},
  {id: 3, title: 'Закуски'},
  {id: 4, title: 'Коктейли'},
  {id: 5, title: 'Кофе'},
  {id: 6, title: 'Напитки'},
  {id: 7, title: 'Десерты'},
];

export const Categories: React.FC<Props> = ({ className }) => {
  const activeCategoryId = useCategoryStore(state=>state.activeId);
  return (
    <div className={cn('inline-flex flex-wrap gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {categories.map((cat, i) => (
        <a href={`#${cat}`} key={cat.id} className={cn('rounded-2xl flex items-center font-bold text-gray-500')}>
          <button className={cn('px-5 h-11 rounded-2xl', i === activeCategoryId && 'bg-white text-primary shadow-md shadow-gray-200')}>{cat.title}</button>
        </a>
      ))}
    </div>
  );
};
