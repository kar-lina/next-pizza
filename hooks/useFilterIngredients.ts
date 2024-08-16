import { Api } from '@/services/api-client';
import { Ingredient } from '@prisma/client';
import React from 'react';
import { useSet } from 'react-use';

type IngredientItem = Pick<Ingredient, 'id' | 'name'>;
interface ReturnProps {
  ingredients: IngredientItem[];
  loading: boolean;
  selectedIds: Set<string>;
  onAddId: (id: string) => void;
}
export const useFilterIngredients = (): ReturnProps => {
  const [ingredients, setIngredients] = React.useState<ReturnProps['ingredients']>([]);
  const [loading, setLoading] = React.useState(false);
  const [selectedIds, { add, has, remove, toggle }] = useSet(new Set<string>([]));

  React.useEffect(() => {
    async function fetchIngredients() {
      // чтобы использовать aync/await внутри useEffect
      try {
        setLoading(true);
        const response = await Api.ingredients.getAll();
        setIngredients(response.map((ingredient) => ({ id: ingredient.id, name: ingredient.name })));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchIngredients();
  }, []); // пустой массив,чтобы запустился только один раз при первом ренедере
  return { ingredients, loading, onAddId: toggle, selectedIds };
};
