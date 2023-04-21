import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { order, sortBy, category, search, currentPage } = params;
    const { data } = await axios.get(
      `https://6405853940597b65de392e56.mockapi.io/item?page=${currentPage}&limit=8${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data;
  }
);

type Pizza = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
}

interface PizzaSliceState {
  items: Pizza[];
  status: 'loading' | 'success' | 'error';
}

const initialState: PizzaSliceState = {
  items: [],
  status: 'loading' // loading | success | error
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
 extraReducers: {
    [fetchPizzas.pending]: (state) => {
        state.status = 'loading'
        state.items = []
    },
    [fetchPizzas.fulfilled]: (state, action) => {
        state.items = action.payload
        state.status = 'succes'
    },
    [fetchPizzas.rejected]: (state) => {
        state.status = 'error'
        state.items = []
    }, 
 }
});

export const selectPizzaData = (state: RootState) => state.pizza

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
