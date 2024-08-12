import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const addFilterSlice = createSlice({
    name: "addFilters",
    initialState,
    reducers: {
        addFilter: (state, action) => {
            const result = action.payload;
            const key = Object.keys(result)[0];
            if (key === 'price') {
                const existingPriceFilter = state.find(filter => filter.hasOwnProperty(key));
                if (existingPriceFilter) {
                    existingPriceFilter[key] = result[key];
                } else {
                    state.push(action.payload);
                }
            } else {
                const existingFilterIndex = state.findIndex(filter => filter[key]?.['value'] === result[key]?.['value']);
                if (existingFilterIndex > -1) {
                    state.splice(existingFilterIndex, 1);
                } else {
                    state.push(action.payload);
                }
            }
            return state;
        },
        removeFilter: (state,action) => {
             state.splice(action.payload,1);
             return state;
        },
        resetFilter: () => {
            return initialState;
        },

    }
});


export const { addFilter, removeFilter,resetFilter } = addFilterSlice.actions;

export default addFilterSlice.reducer;