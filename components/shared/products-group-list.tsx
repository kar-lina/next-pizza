'use client';
import React from 'react';
import { Title } from './title';
import { cn } from '@/lib/utils';
import { ProductCard } from './product-card';
import { useIntersection } from 'react-use';
import { useCategoryStore } from '@/store/category';

interface Props {
  title: string;
  items: any[];
  categoryId: number;
  listClassName?: string;
  className?: string;
}

export const ProductsGroupList: React.FC<Props> = ({ title, items, categoryId, listClassName, className }) => {
  const setActiveCategoryId = useCategoryStore(state=>state.setActiveId);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [intersection, categoryId]);
  return (
    <div  className={className} ref={intersectionRef} id={title}>
      <Title size="lg" className="font-extrabold mb-5" text={title} />
      <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12', listClassName)}>
        {items.map((item, i) => (
          <ProductCard key={i} title={item.title} imgUrl={item.imgUrl} price={item.items[0].price} id={item.id} />
        ))}
      </div>
    </div>
  );
};
