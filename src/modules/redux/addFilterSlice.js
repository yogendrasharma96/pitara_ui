import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    fabric:[],
    occasion:[],
    size:[],
    pattern:[],
    color:[],
    minPrice: null,
    maxPrice: null,
};

const addFilterSlice = createSlice({
    name: "addFilters",
    initialState,
    reducers: {
        addFilter: (state, action) => {
            return { ...state, ...action.payload };
        },
        removeFilter: () => {
            return initialState;
        },
        
    }
});


export const { addFilter,removeFilter } = addFilterSlice.actions;

export default addFilterSlice.reducer;