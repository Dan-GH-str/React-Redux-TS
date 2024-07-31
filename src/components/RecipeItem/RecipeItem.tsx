import cl from "./RecipeItem.module.css"
import { useActions } from "../../hooks/useActions.ts"
import { useFavorites } from "../../hooks/useFavorites.ts"
import DefaultButton from "../UI/DefaultButton/DefaultButton.tsx"
import { IRecipe } from "../../types/recipe.types"

interface IRecipeItem {
    recipe: IRecipe
}

const RecipeItem = ({ recipe }: IRecipeItem) => {
    // const state = useSelector(state => state.favorites)
    // const dispatch = useDispatch()
    const { toggleFavorite } = useActions()
    const { favorites, isExists } = useFavorites()

    // const isExists = state.some(item => item.id === recipe.id)
    const btnText = isExists(recipe) ? "Remove From Favorites" : "Add To Favorites"

    console.log(favorites);

    return (
        <article className={cl["recipe-item"]}>
            <h2 className={cl["recipe-item__title"]}>{recipe.title}</h2>
            <img className={cl["recipe-item__img"]} src={recipe.url} alt="img" />
            <DefaultButton onClick={() => toggleFavorite(recipe)}>{btnText}</DefaultButton>
        </article>
    )
}

export default RecipeItem