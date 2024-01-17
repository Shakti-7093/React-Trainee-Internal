import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registrationStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    registrationSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    registrationFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { registrationStart, registrationSuccess, registrationFailure } =
  authSlice.actions;

export const registerUser = (formData) => async (dispatch) => {
  try {
    dispatch(registrationStart());
    const response = await axios.post(
      "http://localhost:3000/register",
      formData
    );
    dispatch(registrationSuccess(response.data));
  } catch (error) {
    dispatch(registrationFailure(error.message));
  }
};

export default authSlice.reducer;
