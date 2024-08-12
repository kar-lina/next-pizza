import React from 'react';
import { FilterChecboxProps, FilterCheckbox } from './filter-checkbox';
import { Button, Input } from '../ui';
import { cn } from '@/lib/utils';
type Item = FilterChecboxProps;
interface Props {
  className?: string;
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit?: number;
  searcInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
}

export const CheckboxFiltersGroup: React.FC<Props> = ({ title, items, onChange, defaultItems, limit = 5, searcInputPlaceholder = 'Поиск...', className }) => {
  const [showAll, setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');


  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const renderItems = showAll ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase())) : defaultItems?.slice(0, limit);

  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>
      {showAll && (
        <div className="mb-5">
          <Input onChange={onSearchChange} placeholder={searcInputPlaceholder} className="bg-gray-50 border-none" />
        </div>
      )}
      <div className="flex flex-col gap-4 max-h-96 overflow-auto scrollbar pr-2 ">
        {renderItems.map((item, key) => (
          <FilterCheckbox key={String(item.value) + key} {...item} onCheckedChange={() => console.log('checked', item.text)} checked={false} />
        ))}
      </div>

      {items.length > limit && (
        <div className={!showAll ? 'border-t border-t-neutral-100 mt-5' : ''}>
          <button onClick={() => setShowAll(!showAll)} className="mt-2  text-primary">
            {showAll ? 'Скрыть' : '+Показать все'}
          </button>
        </div>
      )}
    </div>
  );
};
