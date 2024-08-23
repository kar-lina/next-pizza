import React from 'react';
import { FilterChecboxProps, FilterCheckbox } from './filter-checkbox';
import { Button, Input, Skeleton } from '../ui';
import { cn } from '@/shared/lib/utils';
type Item = FilterChecboxProps;
interface Props {
  className?: string;
  title: string;
  items: Item[];
  defaultItems?: Item[];
  name?: string;
  loading?: boolean;
  limit?: number;
  searcInputPlaceholder?: string;
  onClikedCheckbox?: (id: string) => void;
  values?: Set<string>;
  defaultValue?: string[];
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  onClikedCheckbox,
  defaultItems,
  name,
  loading,
  limit = 5,
  values,
  searcInputPlaceholder = 'Поиск...',
  className,
}) => {
  const [showAll, setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  if (loading)
    return (
      <div className={className}>
        <p className="font-bold mb-3">{title}</p>
        {...Array(limit)
          .fill(0)
          .map((_, index) => <Skeleton key={index} className="h-6 mb-4 rounded-[8px]" />)}
        <Skeleton className="h-6 w-28 rounded-[8px]" />
      </div>
    );

  const renderItems = showAll ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase())) : (defaultItems || items)?.slice(0, limit);

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
          <FilterCheckbox
            name={name}
            key={String(item.value) + key}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            onCheckedChange={() => onClikedCheckbox?.(item.value)}
            checked={values?.has(item.value)}
          />
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
