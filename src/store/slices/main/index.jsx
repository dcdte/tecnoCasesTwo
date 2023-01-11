import { createSlice } from "@reduxjs/toolkit";
import { MdStarRate } from "react-icons/md";
const initialState = {
  zones: [],
  zoneId: null,
  rams: [],
  roms: [],
  batterys: [],
  cameras: [],
  finances: [],
  details: [],
  pages: [],
  filters: {
    finances: [],
    rams: [],
    roms: [],
    batterys: [],
    cameras: [],
    maxPay: null,
    searchValue: "",
  },
  partialFilters: {
    finances: [],
    rams: [],
    roms: [],
    batterys: [],
    cameras: [],
    maxPay: null,
    searchValue: "",
  },
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
      state.setPages = action.payload;
    },
    setBatterys: (state, action) => {
      state.batterys = action.payload;
    },
    setCameras: (state, action) => {
      state.cameras = action.payload;
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
  setPartialFilters,
  setPages,
  setBatterys,
  setCameras,
} = mainSlice.actions;

export default mainSlice.reducer;
