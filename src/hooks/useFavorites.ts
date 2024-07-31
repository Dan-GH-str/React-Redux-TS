import { useCallback } from "react"
import { useTypedSelector } from "./useTypedSelector"
import { IRecipe } from "../types/recipe.types"

// Хук возврашает состояние, отвечающее за избранные рецепты, и функцию проверки наличия рецепта в избранных
export const useFavorites = () => {
    const favorites = useTypedSelector(state => state.favorites)

    const isExists = useCallback((recipe: IRecipe) => favorites.some(item => item.id === recipe.id), [favorites])

    return { favorites, isExists }
}