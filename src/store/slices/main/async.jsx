import {
  setCases,
  setFilters,
  setPartialFilters,
  setPages,
  setModels,
} from ".";
import axios from "axios";
const url = "http://localhost:3000";
//const url = "https://tecnocredits.herokuapp.com";

export const getCasesAsync =
  ({ searchValue = null, models = null, maxPay = null, page }) =>
  async (dispatch) => {
    try {
      let criteria = [];
      if (searchValue) criteria.push(`searchValue=${searchValue}`);
      if (models) criteria.push(`models=${models}`);
    
      const response = await axios.post(
        `${url}/supercase/v1/products${criteria.length > 0 ? "?" + criteria.join("&") : ""}`
      );

      const notPaged = response.data;
      const pages = Math.floor(notPaged.length / 24);
      dispatch(setPages(notPaged.length % 24 == 0 ? pages : pages + 1));
      if (page) criteria.push(`page=${page}`);

      const realResponse = await axios.post(
        `${url}/supercase/v1/products${criteria.length > 0 ? "?" + criteria.join("&") : ""}`
      );

      dispatch(setCases(realResponse.data));
    } catch (err) {
      console.log(err);
    }
  };

export const getFiltersAsync = () => async (dispatch) => {
  try {
    const response = await axios.post(`${url}/supercase/v1/products`);
    const dataProducts = response.data;
    const models = [];
    dataProducts.forEach((element) => {
      element.model.split(",").forEach((model) => {
        if (!models.some((item) => item.trim() === model.trim())) {
          models.push(model);
        }
      });
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
