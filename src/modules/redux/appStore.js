import { configureStore } from "@reduxjs/toolkit";
import addProductSlice from "./addProductSlice";
import sideBarSlice from "./sideBarSlice";
import addFilterSlice from "./addFilterSlice";

const appStore = configureStore({
    reducer: {
        addProducts: addProductSlice,
        addFilters: addFilterSlice,
        sideBar: sideBarSlice
    }
})

export default appStore;