import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  models: [],
  cases: [],
  pages: null,
  filters: {
    models: [],
    maxPay: null,
    searchValue: "",
    page: 1
  },
  partialFilters: {
    models: [],
    maxPay: null,
    searchValue: "",
    page: 1
  },
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setModels: (state, action) => {
      state.models = action.payload
    },
    setCases: (state, action) => {
      state.cases = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    setPartialFilters: (state, action) => {
      state.partialFilters = action.payload;
    },
    setPages: (state, action) => {
      state.pages = action.payload;
    }
  },
});

export const {
  setCases,
  setFilters,
  setPartialFilters,
  setPages,
  setModels
} = mainSlice.actions;

export default mainSlice.reducer;
