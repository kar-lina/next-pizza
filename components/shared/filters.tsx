'use client';
import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input, RangeSlider } from '../ui';
import { CheckboxFiltersGroup } from './checkbox-filters-group';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title size="sm" text="Фильтрация" className="font-bold mb-5" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="custom" />
        <FilterCheckbox text="Новинки" value="new" />
      </div>

      <div className="py-6 mt-6 border-y border-neutral-100">
        <p className="text-[16px] font-bold mb-4">Цена от и до:</p>
        <div className="flex items-center gap-3 mb-5">
          <Input type="number" min={100} max={1000} step={10} placeholder="0" defaultValue={0} />
          <Input type="number" min={100} max={1000} step={10} placeholder="1000" />
        </div>
        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>
      <CheckboxFiltersGroup
        className="mt-6"
        title="Ингредиенты"
        limit={6}
        defaultItems={[
          { text: 'Сырный соус', value: '1' },
          { text: 'Чеснок', value: '2' },
          { text: 'Соленые огурчики', value: '3' },
          { text: 'Моцарелла', value: '4' },
        ]}
        items={[
          { text: 'Сырный соус', value: '1' },
          { text: 'Чеснок', value: '2' },
          { text: 'Соленые огурчики', value: '3' },
          { text: 'Моцарелла', value: '4' },
          { text: 'Сырный соус', value: '1' },
          { text: 'Чеснок', value: '2' },
          { text: 'Соленые огурчики', value: '3' },
          { text: 'Моцарелла', value: '4' },
          { text: 'Сырный соус', value: '1' },
          { text: 'Чеснок', value: '2' },
          { text: 'Соленые огурчики', value: '3' },
          { text: 'Моцарелла', value: '4' },
        ]}
      />
    </div>
  );
};
