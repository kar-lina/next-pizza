
'use client';
import { cn } from '@/shared/lib/utils';
import { useCategoryStore } from '@/shared/store/category';
import { Category } from '@prisma/client';

import React from 'react';

interface Props {
  className?: string;
  items: Category[];
}


export const Categories: React.FC<Props> = ({ className, items }) => {
  const activeCategoryId = useCategoryStore((state) => state.activeId);
  return (
    <div className={cn('inline-flex flex-wrap gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {items.map((cat, i) => (
        <a href={`#${cat.name}`} key={cat.id} className={cn('rounded-2xl flex items-center font-bold text-gray-500')}>
          <button className={cn('px-5 h-11 rounded-2xl', cat.id === activeCategoryId && 'bg-white text-primary shadow-md shadow-gray-200')}>{cat.name}</button>
        </a>
      ))}
    </div>
  );
};
