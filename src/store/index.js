import { configureStore } from '@reduxjs/toolkit'
import { productsSlice } from './slices/productsSlice'

export const store = configureStore({
    reducer: { app: productsSlice.reducer },
})