import { configureStore } from "@reduxjs/toolkit";
import { mainSlide } from "./slices/main";

export default configureStore({
  reducer: {
    main: mainSlide,
  },
});
