import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  value: [],
  cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
  wishlist: localStorage.getItem("wishlist") ? JSON.parse(localStorage.getItem("wishlist")) : [],
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
      let excist = current(state.cart).find((item)=> item.id == action.payload.id)
      if(!excist){
        state.cart = [...state.cart, action.payload]
        localStorage.setItem('cart', JSON.stringify(state.cart));
      }
    },
    RemoveReducer : (state, action) => {
      state.cart = state.cart.filter((item)=> item.id !== action.payload)
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    WishlistReducer : (state, action) => {
      let excist = current(state.wishlist).find((item)=> item.id == action.payload.id)
      if(!excist){
        state.wishlist = [...state.wishlist, action.payload]
        localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
      }
    },
    RemoveWishlist : (state, action) => {
      state.wishlist = state.wishlist.filter((item)=> item.id !== action.payload)
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    },
  },
})

// Action creators are generated for each case reducer function
export const { Products, CategorieReducer, CartReducer, WishlistReducer, RemoveReducer, RemoveWishlist } = ProductSlice.actions

export default ProductSlice.reducer






