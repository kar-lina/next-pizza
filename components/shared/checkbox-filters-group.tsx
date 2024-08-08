import React from 'react';
import { FilterChecboxProps, FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
type Item = FilterChecboxProps
interface Props {
  className?: string;
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  searcInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
}

export const CheckboxFiltersGroup: React.FC<Props> = ({ title, items, onChange, defaultItems, limit=5, searcInputPlaceholder='Поиск...', className }) => {
  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>
      <div className="mb-5">
        <Input placeholder={searcInputPlaceholder} className="bg-gray-50 border-none" />
      </div>
      <div className="flex flex-col gap-4 max-h-96 overflow-auto scrollbar pr-2 ">
        {items.map((item) => (
          <FilterCheckbox key={String(item.value)} {...item} onCheckedChange={()=> console.log('checked', item.text)} checked={false} />
        ))}
      </div>
    </div>
  );
};
