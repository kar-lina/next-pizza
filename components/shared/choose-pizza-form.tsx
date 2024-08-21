import { Product } from '@prisma/client';
import React from 'react';

interface Props {
  name: string;
  imageUrl: string;
  ingredients: any
  items?: any
  className?: string;
  onCLickAdd: VoidFunction
}

export const ChoosePizzaForm: React.FC<Props> = ({name, imageUrl, ingredients, items, onCLickAdd,className }) => {
  return <div className={className}>
    
  </div>;
};
