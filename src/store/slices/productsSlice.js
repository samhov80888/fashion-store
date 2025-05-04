import { createSlice } from '@reduxjs/toolkit'



const initialState = {
  products: [],
  loading: false,
  filteredProducts: [],
  singleProduct: [],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload
    },
    allProducts: (state, { payload }) => {
      state.products = payload
    },
    getSingleProduct: (state, { payload }) => {
      state.singleProduct = payload
    },
    setFilters: (state, { payload }) => {
      if (payload.min || payload.max) {
        state.filteredProducts = state.products.filter(product => (
          product.price > payload.min && product.price < payload.max
        ))
      }
      if (typeof payload === "string") {
        state.filteredProducts = state.products.filter(product => (
          product.category === payload
        ))
      }
    },
  },
})

export const { setLoading, allProducts, getSingleProduct, setFilters } = productsSlice.actions

export default productsSlice.reducer