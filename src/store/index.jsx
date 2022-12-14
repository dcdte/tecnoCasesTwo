import { configureStore } from "@reduxjs/toolkit";
import main from "./slices/main";

export default configureStore({
  reducer: {
    main
  },
});
