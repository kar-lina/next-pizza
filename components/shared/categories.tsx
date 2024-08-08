import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
}
const cats = ['Пиццы', 'Комбо', 'Закуски', 'Коктейли', 'Кофе', 'Напитки', 'Десерты'];
const activeIndex = 1;
export const Categories: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {cats.map((cat, i) => (
        <a key={cat} className={cn('rounded-2xl flex items-center font-bold text-gray-500')}>
          <button className={cn('px-5 h-11 rounded-2xl', i === activeIndex && 'bg-white text-primary shadow-md shadow-gray-200')}>{cat}</button>
        </a>
      ))}
    </div>
  );
};
