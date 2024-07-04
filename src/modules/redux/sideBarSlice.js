import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
    name: 'sideBar',
    initialState: true,
    reducers: {
        toggleSideBar: (state) => {
            return !state;
        }
    }
});

export const { toggleSideBar } = sideBarSlice.actions;

export default sideBarSlice.reducer;


