import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
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
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { Products, CategorieReducer } = ProductSlice.actions

export default ProductSlice.reducer
