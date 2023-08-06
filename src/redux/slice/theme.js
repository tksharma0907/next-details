import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

export const theme = createSlice({
  name: "themeConfig",
  initialState,
  reducers: {
    setGlobalTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setGlobalTheme } = theme.actions;
export default theme.reducer;
