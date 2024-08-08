import { configureStore } from "@reduxjs/toolkit";
import addProductSlice from "./addProductSlice";
import sideBarSlice from "./sideBarSlice";

const appStore = configureStore({
    reducer: {
        addProducts: addProductSlice,
        sideBar: sideBarSlice
    }
})

export default appStore;