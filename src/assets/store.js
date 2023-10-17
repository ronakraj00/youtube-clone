import { configureStore } from "@reduxjs/toolkit";
import sideBarVisibleSlice from "./sideBarVisibleSlice";

const store = configureStore({
    reducer: {
        sidebar: sideBarVisibleSlice,
    },
});

export default store;
