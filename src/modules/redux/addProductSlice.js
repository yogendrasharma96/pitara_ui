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
                id: null,
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
        addProductSubArray: (state) => {
            state.productDetails = [...state.productDetails, { id: null, productSize: null }];
        },
        addProductSize: (state, action) => {
            // state.productDetails.map(product => {
            //     if(product.id==null){
            //     product.id = action.payload.id;
            //     product.productSize = action.payload.productSize;
            //     }else {
            //         if(product.id===action.payload.id)
            //         product.productSize = action.payload.productSize;
            //     }
            //     return product;
            // }
            // )
            state.productDetails = state.productDetails.map(product => {
                if (product.id === action.payload.id || product.id === null) {
                  product.id = action.payload.id;
                  product.productSize = action.payload.productSize;
                }
                return product;
              });
        }
    }
});


export const { addProductName, addProductDesc, addProductCat, addProductTags, addProductSize, addProductSubArray } = addProductSlice.actions;

export default addProductSlice.reducer;