import { FormEvent, useState } from "react"
import DefaultButton from "../UI/DefaultButton/DefaultButton.tsx"
import cl from "./CreateRecipe.module.css"
import { useCreateRecipeMutation } from "../../store/api/recipe.api.ts"
import { IRecipeData } from "../../types/recipe.types"

const defaultState: IRecipeData = {
    title: "",
    url: ""
}

const CreateRecipe = () => {
    const [ recipe, setRecipe ] = useState(defaultState)

    const [ createRecipe ] = useCreateRecipeMutation()

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        createRecipe(recipe).then(() => setRecipe(defaultState))
    }

    return (
        <form onSubmit={handleSubmit} className={cl["create-recipe-form"]}>
            <h1>Create Recipe</h1>
            <label className={cl["create-recipe-form__label"]} >
                <input 
                    type="text" 
                    placeholder="Enter recipe name" 
                    value={recipe.title}
                    onChange={e => setRecipe({...recipe, title: e.target.value})}
                    className={cl["create-recipe-form__input"]} 
                />
            </label>
            <label className={cl["create-recipe-form__label"]} >
                <input 
                    type="text" 
                    placeholder="Enter the URL of the recipe image"  
                    value={recipe.url}
                    onChange={e => setRecipe({...recipe, url: e.target.value})}
                    className={cl["create-recipe-form__input"]} 
                />
            </label>
            <DefaultButton type="submit">Create</DefaultButton>
        </form>
    )
}

export default CreateRecipe