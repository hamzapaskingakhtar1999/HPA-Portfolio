import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  active: sessionStorage.getItem("activeNavbar") || "Home",
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setActiveNavbar: (state, action) => {
      state.active = action.payload;
      sessionStorage.setItem("activeNavbar", action.payload);
    },
  },
});

export const { setActiveNavbar } = navbarSlice.actions;

export default navbarSlice.reducer;
