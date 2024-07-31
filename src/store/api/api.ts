import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IRecipe } from '../../types/recipe.types'

const API_URL = import.meta.env.VITE_API_URL

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Recipe'],
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getRecipe: builder.query<IRecipe[], null>({
      query: () => '?_sort=id&_order=desc&_limit=5',
      // Теги, определенные в методе providesTags, будут связаны со списком постов, полученных методом getPosts. 
      providesTags: () => [{ type: 'Recipe' }]
    })
  })
})

export const { useGetRecipeQuery } = api