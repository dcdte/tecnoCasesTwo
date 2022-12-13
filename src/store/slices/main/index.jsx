import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  zones: [],
  zoneId: null,
  rams: [],
  roms: [],
  finances: [],
  details: [],
  filters: {
    finances: [],
    rams: [],
    roms: [],
    maxPay: null,
    searchValue: null,
  },
};

export const mainSlide = createSlice({
  name: "main",
  initialState,
  reducers: {
    setZones: (state, action) => {
      state.zones = action.payload;
    },
    setZoneId: (state, action) => {
      state.zoneId = action.payload;
    },
    setRams: (state, action) => {
      state.rams = action.payload;
    },
    setRoms: (state, action) => {
      state.roms = action.payload;
    },
    setFinances: (state, action) => {
      state.finances = action.payload;
    },
    setDetails: (state, action) => {
      state.details = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const {
  setZones,
  setZoneId,
  setRams,
  setRoms,
  setFinances,
  setDetails,
  setFilters,
} = mainSlide.actions;
