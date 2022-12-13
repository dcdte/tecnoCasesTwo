import { setDetails, setFinances, setRams, setZones } from ".";

const axios = require("axios");
const url = "http://localhost:3001/";
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
  (
    searchValue = null,
    ram = null,
    storage = null,
    type = "credits",
    financeId = null,
    apply = "reportados",
    zoneId = null,
    maxPay = null,
    page = null
  ) =>
  async (dispatch) => {
    try {
      let criteria = [];
      if (searchValue) criteria.push(`searchValue=${searchValue}`);
      if (ram) criteria.push(`ram=${ram}`);
      if (storage) criteria.push(`storage=${storage}`);
      if (type) criteria.push(`type=${type}`);
      if (financeId) criteria.push(`financeId=${storage}`);
      if (apply) criteria.push(`apply=${apply}`);
      if (zoneId) criteria.push(`zoneId=${zoneId}`);
      if (maxPay) criteria.push(`maxPay=${maxPay}`);
      if (page) criteria.push(`page=${page}`);

      const response = await axios.get(
        `${url}/details${criteria.length > 0 ? "?" + criteria.join("&") : ""}`
      );
      dispatch(setDetails(response.data));
    } catch (err) {
      console.log(err);
    }
  };

export const getFiltersAsync =
  (type = "credits", apply = "reportados", zoneId = null) =>
  async (dispatch) => {
    try {
      let criteria = [];
      if (type) criteria.push(`type=${type}`);
      if (apply) criteria.push(`apply=${apply}`);
      if (zoneId) criteria.push(`zoneId=${zoneId}`);
      const response = await axios.get(
        `${url}/details${criteria.length > 0 ? "?" + criteria.join("&") : ""}`
      );
      dataProducts = response.data;
      rams = [];
      roms = [];
      finances = [];
      dataProducts.forEach((element) => {
        if (!rams.some((item) => item === element.ram)) {
          rams.push(element.ram);
        }

        if (!roms.some((item) => item === element.storage)) {
          roms.push(element.storage);
        }

        element.credits.forEach((e) => {
          if (!finances.some((item) => item.ID === e.financeId)) {
            finances.push(e.finance)
          }
        });
      });
      dispatch(setRams(rams))
      dispatch(setRoms(roms))
      dispatch(setFinances(finances))
    } catch (err) {
      console.log(err);
    }
  };
