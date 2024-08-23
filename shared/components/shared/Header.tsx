import { cn } from '@/shared/lib/utils';
import React from 'react';
import { Container } from './container';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui';
import { ArrowRight, ShoppingCart, User } from 'lucide-react';
import { SearchInput } from './search-input';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <>
      <header className={cn('border-b ', className)}>
        <Container className="flex items-center justify-between py-8 gap-2">
          <Link href={'/'} className="flex items-center gap-4 flex-shrink-0">
            <Image src="/logo.png" alt="logo" width={32} height={32} className="w-8 h-8" />
            <div className="hidden md:block">
              <h1 className="text-xlmd:text-2xl font-black uppercase">NEXT PIZZA</h1>
              <p className="text-sm text-gray-400 leading-3">вкусней уже некуда</p>
            </div>
          </Link>
          <div className="mx-5 md:mx-10 flex-1">
            <SearchInput />
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" className="flex items-center gap-1">
              <User size={16} />
              <span className='hidden md:block'> Войти</span>
            </Button>
            <div>
              <Button className="group relative">
                <b>520 ₽</b>
                <span className="h-full w-[1px] bg-white/30 mx-3"></span>
                <div className="flex items-center gap-1 transition-opacity duration-300 group-hover:opacity-0">
                  <ShoppingCart size={16} className="relative" strokeWidth={2} />
                  <b>3</b>
                </div>
                <ArrowRight className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" size={16} />
              </Button>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};
