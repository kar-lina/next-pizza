'use client';
import React from 'react';
import { Title } from './title';
import { Input, RangeSlider } from '../ui';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useQueryFilters, useFilters, useIngredients } from '@/shared/hooks';
interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading } = useIngredients();
  
  const { setPrices, setSizes, setPizzaTypes, setIngredients, setSelectedIngredients, ...filters } = useFilters();
  useQueryFilters(filters);
  const items = ingredients.map((ingredient) => ({ text: ingredient.name, value: String(ingredient.id) }));
  const defaultItems = items.slice(0, 5);
  const updatePrices = ([from, to]: [number, number]) => {
    setPrices('priceTo', to);
    setPrices('priceFrom', from);
  };
  return (
    <div className={className}>
      <Title size="sm" text="Фильтрация" className="font-bold mb-5" />

      <CheckboxFiltersGroup
        title="Тип теста"
        name="PizzaTypes"
        className="mb-6"
        items={[
          { text: 'Тонкое', value: '1' },
          { text: 'Традиционное', value: '2' },
        ]}
        values={filters.pizzaTypes}
        onClikedCheckbox={setPizzaTypes}
      />

      <CheckboxFiltersGroup
        title="Размеры"
        name="sizes"
        className="mb-6"
        items={[
          { text: '20 см', value: '20' },
          { text: '30 см', value: '30' },
          { text: '40 см', value: '40' },
        ]}
        values={filters.sizes}
        onClikedCheckbox={setSizes}
      />

      <div className="py-6 mt-6 border-y border-neutral-100">
        <p className="text-[16px] font-bold mb-4">Цена от и до:</p>
        <div className="flex items-center gap-3 mb-5">
          <Input
            type="number"
            min={100}
            max={1000}
            step={10}
            placeholder="0"
            value={String(filters.prices.priceFrom || 0)}
            onChange={(e) => setPrices('priceFrom', Number(e.target.value))}
          />
          <Input
            type="number"
            min={100}
            max={1000}
            step={10}
            placeholder="1000"
            value={String(filters.prices.priceTo || 1000)}
            onChange={(e) => setPrices('priceTo', Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 1000]}
          onValueChange={([priceFrom, priceTo]) => updatePrices([priceFrom, priceTo])}
        />
      </div>
      <CheckboxFiltersGroup
        name="ingredients"
        className="mt-6"
        title="Ингредиенты"
        limit={6}
        loading={loading}
        defaultItems={defaultItems}
        items={items}
        values={filters.selectedIngredients}
        onClikedCheckbox={setIngredients}
      />
    </div>
  );
};
