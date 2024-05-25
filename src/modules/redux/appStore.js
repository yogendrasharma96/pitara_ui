import { configureStore } from "@reduxjs/toolkit";
import addProductSlice from "./addProductSlice";

const appStore= configureStore({
    reducer:{
        addProducts:addProductSlice,   
    }
})

export default appStore;