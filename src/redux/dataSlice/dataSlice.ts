"use client"
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


// Define a type for the slice state
interface DataState {
  cartData : Array<any>
}

// Define the initial state using that type
const initialState: DataState= {
  cartData : [],
}

export const dataSlice = createSlice({
  name: 'cartData',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state ,  action: PayloadAction<Array<any>>) => {
      state.cartData =  action.payload
    },
    removeToCart: (state ,  action: PayloadAction<Array<any>>) => {
        state.cartData =  action.payload
    },
  },
})

export const { addToCart,removeToCart } = dataSlice.actions


export default dataSlice.reducer