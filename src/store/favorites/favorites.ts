import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRecipe } from "../../types/recipe.types";

const initialState: IRecipe[] = []

export const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorite: (state, { payload: recipe }: PayloadAction<IRecipe>) => {
            const isExists = state.some(item => item.id === recipe.id)
            if(isExists){
                const index = state.findIndex(item => item.id === recipe.id)
                state.splice(index, 1)

                // state = state.filter(item => item.id !== action.payload.id)
            }else
                state.push(recipe)
        }
    }
})

export const { actions, reducer } = favoriteSlice