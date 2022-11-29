import { createSlice } from "@reduxjs/toolkit";

const pathSlice = createSlice({
  name: "path",
  initialState: { path: "" },
  reducers: {
    addPath(state, action) {
      state.path = action.payload;
    },
  },
});
export const { addPath } = pathSlice.actions;
export default pathSlice.reducer;
