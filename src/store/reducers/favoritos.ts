import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosState = {
  some(arg0: (fav: { id: number }) => boolean): unknown
  items: Produto[]
}

const initialState: FavoritosState = {
  items: [],
  some: function (arg0: (fav: { id: number }) => boolean): unknown {
    throw new Error('Function not implemented.')
  }
}

const favoritosSlice = createSlice({
  name: 'Favoritos',
  initialState,
  reducers: {
    toggleFavoritos: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (state.items.find((p) => p.id === produto.id)) {
        state.items = state.items.filter((p) => p.id !== produto.id)
      } else {
        state.items.push(produto)
      }
    }
  }
})

export const { toggleFavoritos } = favoritosSlice.actions
export default favoritosSlice.reducer
