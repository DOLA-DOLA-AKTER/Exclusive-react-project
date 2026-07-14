import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
  cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
}

export const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    Products: (state, action) => {
      state.value = action.payload
    },
    CategorieReducer : (state, action) => {
      state.value = [...action.payload]
    },
    CartReducer : (state, action) => {
      state.cart = [...state.cart, action.payload]
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { Products, CategorieReducer, CartReducer } = ProductSlice.actions

export default ProductSlice.reducer
