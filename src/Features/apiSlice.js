import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Action
export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
});

export const todoSlice = createSlice({
  name: 'APICALL',
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  reducers: {}, // reducers object ko empty chhod diya hai agar aapka koi sync reducer nahi hai
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        console.log("Error", action.error.message);
        state.isError = true;
        state.isLoading = false;
      });
  }
});

export default todoSlice.reducer; // Export reducer for the store
