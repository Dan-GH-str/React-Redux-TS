import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as favoritesReducer } from './favorites/favorites'
import { api } from './api/api'

const reducer = combineReducers({
  favorites: favoritesReducer,
  [api.reducerPath]: api.reducer
})

export const store = configureStore({
  reducer,
  devTools: true,
  // Добавление api middleware позволяет использовать различные полезные функции `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>