import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
  cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
  wishlist: localStorage.getItem("wishlist") ? JSON.parse(localStorage.getItem("wishlist")) : []
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
    WishlistReducer : (state, action) => {
      state.wishlist = [...state.wishlist, action.payload]
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { Products, CategorieReducer, CartReducer, WishlistReducer } = ProductSlice.actions

export default ProductSlice.reducer
