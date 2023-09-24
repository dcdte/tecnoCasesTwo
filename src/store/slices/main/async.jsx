import {
  setCases,
  setFilters,
  setPartialFilters,
  setPages,
  setModels,
} from ".";
import axios from "axios";
const url = "http://localhost:3000";
const urlFront = "http://localhost:3000/";

export const getCasesAsync =
  ({ searchValue = null, models = null, maxPay = null, page = 1 }) =>
  async (dispatch) => {
    try {
      let criteria = [];
      if (searchValue) criteria.push(`searchValue=${searchValue}`);
      if (models) criteria.push(`models=${models}`);
      if (maxPay) criteria.push(`maxPay=${maxPay}`);

      const response = await axios.get(
        `${url}/cases${criteria.length > 0 ? "?" + criteria.join("&") : ""}`
      );
      const notPaged = response.data;
      const pages = Math.floor(notPaged.length / 12);
      dispatch(setPages(notPaged.length % 12 == 0 ? pages : pages + 1));
      if (page) criteria.push(`page=${page}`);
      const realResponse = await axios.get(
        `${url}/cases${criteria.length > 0 ? "?" + criteria.join("&") : ""}`
      );

      dispatch(setCases(realResponse.data));
    } catch (err) {
      console.log(err);
    }
  };

export const getFiltersAsync = () => async (dispatch) => {
  try {
    const response = await axios.get(`${url}/cases`);
    const dataProducts = response.data;
    const models = [];
    dataProducts.forEach((element) => {
      if (!models.some((item) => item.trim() === element.model.trim())) {
        models.push(element.model);
      }
    });

    dispatch(setModels(models));

    const defaultFilter = {
      maxPay: null,
      models: models.map((item) => ({
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
