import { createSlice } from "@reduxjs/toolkit";

const sideBarVisibeSlice = createSlice({
    name: "sidebarVisible",
    initialState: {
        isVisible: true,
    },
    reducers: {
        toggelSidebar: (state) => {
            state.isVisible = !state.isVisible;
        },
        hideSideBar: (state) => {
            state.isVisible = false;
        },
    },
});

export const { toggelSidebar, hideSideBar } = sideBarVisibeSlice.actions;

export default sideBarVisibeSlice.reducer;
