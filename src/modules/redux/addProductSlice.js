import { createSlice } from "@reduxjs/toolkit";
import { defaultProductDetails } from "../utils/constants";


const addProductSlice = createSlice({
    name: "addProducts",
    initialState: {
        productName: null,
        productDescription: null,
        productCategory: null,
        productTags: null,
        productDetails: [
            defaultProductDetails
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
        addFirstProductId: (state, action) => {
            state.productDetails[0].id = action.payload;
        },
        addProductSubArray: (state, action) => {
            const newProductDetails = { ...defaultProductDetails, id: action.payload.id };
            state.productDetails = [...state.productDetails, newProductDetails
            ];
        },
        removeProductSubArray: (state, action) => {
            state.productDetails = state.productDetails.filter((val) => val.id !== action.payload);
        },
        addProductDetails: (state, action) => {
            state.productDetails = state.productDetails.map(product => {
                if (product.id === action.payload.id) {
                    product.id = action.payload.id;
                    product.productSize = action.payload.productSize == null ? product.productSize : action.payload.productSize;
                    product.productColor = action.payload.productColor === undefined ? product.productColor : action.payload.productColor;
                    product.productQuantity = action.payload.productQuantity == null ? product.productQuantity : action.payload.productQuantity;
                    product.productPrice = action.payload.productPrice == null ? product.productPrice : action.payload.productPrice;
                    product.productDiscount = action.payload.productDiscount == null ? product.productDiscount : action.payload.productDiscount;
                    product.productImages = action.payload.productImages == null ? product.productImages : action.payload.productImages;
                }
                return product;
            });
        }
    }
});


export const { addProductName, addProductDesc, addProductCat, addProductTags, addProductDetails, addProductSubArray, removeProductSubArray, addFirstProductId } = addProductSlice.actions;

export default addProductSlice.reducer;