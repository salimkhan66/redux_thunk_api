import { configureStore } from '@reduxjs/toolkit'
import { todoSlice } from '../Features/apiSlice'

export const store = configureStore({
  reducer: {
 apiCall: todoSlice.reducer, 
  
    
  }, 
})