import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  zones: [],
  zoneId: null,
  rams: [],
  roms: [],
  batterys: [],
  cameras: [],
  finances: [],
  details: [],
  pages: null,
  filters: {
    finances: [],
    rams: [],
    roms: [],
    batterys: [],
    cameras: [],
    maxPay: null,
    searchValue: "",
    page: 1
  },
  partialFilters: {
    finances: [],
    rams: [],
    roms: [],
    batterys: [],
    cameras: [],
    maxPay: null,
    searchValue: "",
    page: 1
  },
  minPrice: null,
};

export const mainSlice = createSlice({
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
    setPartialFilters: (state, action) => {
      state.partialFilters = action.payload;
    },
    setPages: (state, action) => {
      state.pages = action.payload;
    },
    setBatterys: (state, action) => {
      state.batterys = action.payload;
    },
    setCameras: (state, action) => {
      state.cameras = action.payload;
    },
    setMinPrices: (state, action) => {
      state.minPrice = action.payload
    }
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
  setPartialFilters,
  setPages,
  setBatterys,
  setCameras,
  setMinPrices
} = mainSlice.actions;

export default mainSlice.reducer;
