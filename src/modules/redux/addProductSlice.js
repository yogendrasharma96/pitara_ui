import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    id: null,
    productName: null,
    productDescription: null,
    productCategory: null,
    productTags: null,
    productColor: [],
    productFabric: [],
    productPattern: [],
    productOccasion: [],
    productWashCare: [],
    productBlouse: null,
    productSizeQuantity: null,
    productMrp: null,
    productSP: null,
    productShippingDays:null,
    productCoupon:null,
    productSale:null,
    productReturn:null,
    productImages:[]
};

const addProductSlice = createSlice({
    name: "addProducts",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            return { ...state, ...action.payload };
        },
        removeProduct: () => {
            return initialState;
        },
        updateProduct: (state, action) => {
            const val=action.payload;
            state.id = val.id;
            state.productName = val.productName;
            state.productDescription = val.productDescription;
            state.productCategory = val.productCategory;
            state.productTags = val.productTags;
            state.productSizeQuantity = val.productSizeQuantity;
            state.productColor = val.productColor;
            state.productFabric = val.productFabric;
            state.productPattern = val.productPattern;
            state.productOccasion = val.productOccasion;
            state.productWashCare = val.productWashCare;
            state.productBlouse = val.productBlouse;
            state.productMrp = val.productMrp;
            state.productSP = val.productSP;
            state.productShippingDays = val.productShippingDays;
            state.productCoupon = val.productCoupon;
            state.productSale = val.productSale;
            state.productReturn = val.productReturn;
            state.productImages = val.productImages;
        }
    }
});


export const { addProductName, addProductDesc, addProductCat, addKeyPair,addProductTags, addProductDetails, addProductSubArray, removeProductSubArray, addFirstProductId, removeProduct, updateProduct, addProduct } = addProductSlice.actions;

export default addProductSlice.reducer;