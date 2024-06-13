import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import carrinhoReducer from './reducers/carrinho'
import favoritosReducer from './reducers/favoritos'
import { api } from './services/api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    produtos: favoritosReducer,
    favoritos: favoritosReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

setupListeners(store.dispatch)

export type RootReducer = ReturnType<typeof store.getState>
