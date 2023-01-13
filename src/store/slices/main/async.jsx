import {
  setDetails,
  setFilters,
  setFinances,
  setPartialFilters,
  setRams,
  setRoms,
  setZones,
  setPages,
  setBatterys,
  setCameras,
} from ".";
import axios from "axios";
const url = "https://tecnocredits.herokuapp.com";
const urlFront = "http://localhost:3000/";

export const getZonesAsync = () => async (dispatch) => {
  try {
    const response = await axios.get(`${url}/zones`);
    dispatch(setZones(response.data));
  } catch (err) {
    console.log(err);
  }
};

export const getDetailsAsync =
  ({
    searchValue = null,
    ram = null,
    storage = null,
    battery = null,
    camera = null,
    type = "credits",
    financeId = null,
    apply = "Reportados",
    zoneId = null,
    maxPay = null,
    page = 1,
  }) =>
  async (dispatch) => {
    try {
      let criteria = [];
      if (searchValue) criteria.push(`searchValue=${searchValue}`);
      if (ram) criteria.push(`ram=${ram}`);
      if (storage) criteria.push(`storage=${storage}`);
      if (battery) criteria.push(`battery=${battery}`);
      if (camera) criteria.push(`camera=${camera}`);
      if (type) criteria.push(`type=${type}`);
      if (financeId) criteria.push(`financeId=${financeId}`);
      if (apply) criteria.push(`apply=${apply}`);
      if (zoneId) criteria.push(`zoneId=${zoneId}`);
      if (maxPay) criteria.push(`maxPay=${maxPay}`);

      const response = await axios.get(
        `${url}/details${criteria.length > 0 ? "?" + criteria.join("&") : ""}`
      );
      const notPaged = response.data;
      const pages = Math.floor(notPaged.length / 12);
      dispatch(setPages(notPaged.length % 12 == 0 ? pages : pages + 1));
      if (page) criteria.push(`page=${page}`);
      const realResponse = await axios.get(
        `${url}/details${criteria.length > 0 ? "?" + criteria.join("&") : ""}`
      );

      dispatch(setDetails(realResponse.data));
    } catch (err) {
      console.log(err);
    }
  };

export const getFiltersAsync =
  ({ type = "credits", apply = "Reportados", zoneId = null }) =>
  async (dispatch) => {
    try {
      let criteria = [];
      if (type) criteria.push(`type=${type}`);
      if (apply) criteria.push(`apply=${apply}`);
      if (zoneId) criteria.push(`zoneId=${zoneId}`);
      const response = await axios.get(
        `${url}/details${criteria.length > 0 ? "?" + criteria.join("&") : ""}`
      );
      const dataProducts = response.data;
      const rams = [];
      const roms = [];
      const finances = [];
      const batterys = [];
      const cameras = [];
      dataProducts.forEach((element) => {
        if (!rams.some((item) => item.trim() === element.ram.trim())) {
          rams.push(element.ram);
        }

        if (!roms.some((item) => item.trim() === element.storage.trim())) {
          roms.push(element.storage);
        }

        if (!batterys.some((item) => item.trim() === element.battery.trim())) {
          batterys.push(element.battery);
        }

        if (!cameras.some((item) => item.trim() === element.camera.trim())) {
          cameras.push(element.camera);
        }

        element.credits.forEach((e) => {
          if (!finances.some((item) => item.id === e.financeId)) {
            finances.push(e.finance);
          }
        });
      });
      dispatch(
        setRams(
          rams.sort((a, b) => {
            return a.match(/\d+/g)[0] - b.match(/\d+/g)[0];
          })
        )
      );
      dispatch(
        setRoms(
          roms.sort((a, b) => {
            return a.match(/\d+/g)[0] - b.match(/\d+/g)[0];
          })
        )
      );
      dispatch(setFinances(finances));
      dispatch(
        setBatterys(
          batterys.sort((a, b) => {
            return a.match(/\d+/g)[0] - b.match(/\d+/g)[0];
          })
        )
      );
      dispatch(
        setCameras(
          cameras.sort((a, b) => {
            return a.match(/\d+/g)[0] - b.match(/\d+/g)[0];
          })
        )
      );

      const defaultFilter = {
        maxPay: null,
        searchValue: null,
        finances: finances.map((item) => ({
          id: item.id,
          value: item.name,
          isSelected: false,
        })),
        rams: rams.map((item) => ({
          id: item,
          value: item,
          isSelected: false,
        })),
        roms: roms.map((item) => ({
          id: item,
          value: item,
          isSelected: false,
        })),
        batterys: batterys.map((item) => ({
          id: item,
          value: item,
          isSelected: false,
        })),
        cameras: cameras.map((item) => ({
          id: item,
          value: item,
          isSelected: false,
        })),
      };

      dispatch(setFilters(defaultFilter));
      dispatch(setPartialFilters(defaultFilter));
    } catch (err) {
      console.log(err);
    }
  };
