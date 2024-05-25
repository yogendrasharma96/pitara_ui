import { createSlice } from "@reduxjs/toolkit";


const addProductSlice = createSlice({
    name: "addProducts",
    initialState: {
        productName: null,
        productDescription: null,
        productCategory: null,
        productTags: null,
        productDetails: [
            {
                productSize: null,
            }
        ]
    },
    reducers: {
        addProductName: (state, action) => {
            state.productName = action.payload;
        },
        addProductDesc: (state, action) => {
            state.productDescription = action.payload;
        },
        addProductCat: (state, action) => {
            state.productCategory = action.payload;
        },
        addProductTags: (state, action) => {
            state.productTags = action.payload;
        },
        addProductSize: (state, action) => {
            state.productDetails[0].productSize = action.payload;
        }
    }
});


export const { addProductName, addProductDesc, addProductCat, addProductTags, addProductSize } = addProductSlice.actions;

export default addProductSlice.reducer;