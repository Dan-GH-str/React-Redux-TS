export interface IRecipe {
    id: number
    title: string
    url: string
}

export interface IRecipeData extends Omit<IRecipe, 'id'> {}