import { cn } from '@/shared/lib/utils';
import React from 'react';

interface Props {
  icon?: React.ReactNode;
  title?: string;
  value?: string;
  className?: string;
}

export const CheckoutItemPrice: React.FC<Props> = ({ icon, title, value, className }) => {
  return (
    <div className={cn('flex my-4', className)}>
      <span className="flex flex-1 text-lg text-neutral-500">
        <div className="flex items-center gap-2">
          {icon}
          {title}
        </div>

        <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2"></div>
      </span>
      <span className="font-bold text-lg">{value}</span>
    </div>
  );
};
