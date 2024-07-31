import { IRecipeData } from "../../types/recipe.types";
import { api } from "./api";


export const recipeApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createRecipe: builder.mutation<null, IRecipeData> ({
            query: recipe => ({
                body: recipe,
                url: '/',
                method: 'POST'
            }),
            // Теги, определенные в методе invalidatesTags, будут инвалидированы при добавлении нового рецепта методом createRecipe, чтобы обновить список рецептов, когда новый элемент будет добавлен.
            invalidatesTags: () => [{ type: 'Recipe' }]
        })
    })
})

export const { useCreateRecipeMutation } = recipeApi