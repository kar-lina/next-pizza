import React from 'react';
import { Categories } from './categories';
import { SortPopup } from './sort-popup';
import { cn } from '@/lib/utils';
import { Container } from './container';
import { Category } from '@prisma/client';

interface Props {
  categories: Category[];
  className?: string;
}

export const TopBar: React.FC<Props> = ({ className, categories }) => {
  return (
    <div className={cn('sticky top-0 bg-white z-10  py-5 shadow-lg shadow-black/5', className)}>
      <Container className="flex items-center justify-between flex-wrap gap-4">
        <Categories items={categories} />
        <SortPopup />
      </Container>
    </div>
  );
};
