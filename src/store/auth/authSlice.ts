import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  isLogged: boolean
}

const initialState: AuthState = {
  isLogged: false,
}

export const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    login: (state) => {
      state.isLogged = true;
    },
    logout: (state) => {
      state.isLogged = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer
