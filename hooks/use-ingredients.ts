import { Api } from "@/services/api-client";
import { Ingredient } from "@prisma/client";
import React from "react";


type IngredientItem = Pick<Ingredient, 'id' | 'name'>;

export const useIngredients = () => {
  const [ingredients, setIngredients] = React.useState<IngredientItem[]>([]);
  const [loading, setLoading] = React.useState(false);

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
  return { ingredients, loading};
}