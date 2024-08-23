'use client';
import React, { useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/shared/lib/utils';
import { useClickAway, useDebounce } from 'react-use';
import Link from 'next/link';
import { Api } from '@/shared/services/api-client';
import { Product } from '@prisma/client';

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [focused, setFocused] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [products, setProducts] = React.useState<Product[]>([]);
  const ref = useRef(null);
  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(
    // can work with async functions in difference with useEffect
    async () => {
      try {
        const products = await Api.products.search(searchQuery);
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    },
    250,
    [searchQuery]
  );

  const onClickItem = () => {
    setSearchQuery('');
    setProducts([]);
    setFocused(false);
  };

  return (
    <>
      {focused && <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30"></div>}
      <div ref={ref} className="flex rounded-2xl flex-1 justify-between relative h-11 z-30">
        <Search className="absolute top-1/2 -translate-y-1/2 left-3 h-4 md:h-5 text-gray-400" />
        <input
          className={cn('bg-gray-100 border-none  w-full rounded-2xl pl-10 md:pl-11 text-sm md:text-base', className)}
          placeholder="Поиск питсы..."
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div
          className={cn('absolute w-full bg-white rounded-xl py-4 top-16 shadow-md trasition all duration-200 invisible opacity-0 z-30', focused && 'visible opacity-100 top-14')}>
          {products.length ? (
            products.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`} onClick={onClickItem} className="px-3 w-full flex items-center gap-3 py-2 hover:bg-primary/10 cursor-pointer">
                <img className="rounded-sm h-8 w-8" src={product.imageUrl} width={32} height={32} alt={product.name} />
                <span>{product.name}</span>
              </Link>
            ))
          ) : (
            <div className="px-3 w-full flex items-center gap-3 py-2">
              <span>Ничего не найдено</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
