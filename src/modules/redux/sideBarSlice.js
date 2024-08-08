import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
    name: 'sideBar',
    initialState: false,
    reducers: {
        toggleSideBar: (state) => {
            return !state;
        },
        cancelSideBar:(state)=>{
            state=false;
            return state;
        }
    }
});

export const { toggleSideBar,cancelSideBar } = sideBarSlice.actions;

export default sideBarSlice.reducer;


