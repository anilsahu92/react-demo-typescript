import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  data: any;
  loading: boolean;
  error: null | string;
}

const initialState: UserState = {
  data: [],
  loading: false,
  error: null,
};

export const getUserSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getUserRequest: (state) => {
      state.loading = true;
    },
    getUserSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.data = action.payload;
    },
    getUserError: (state, action: PayloadAction<any>) => {
      //console.log(action.payload.message, action.payload.response.status);
      state.error = action.payload.message;
      state.data = [];
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getUserRequest, getUserSuccess, getUserError } =
  getUserSlice.actions;

export default getUserSlice.reducer;
