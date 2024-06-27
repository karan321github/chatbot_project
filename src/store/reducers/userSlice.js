import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    SignInStart: (state, action) => {
      (state.isLoading = true), (state.error = false);
    },

    SignInSuccess: (state, action) => {
      (state.isLoading = false),
        (state.isLoggedIn = true),
        (state.user = action.payload),
        (state.error = null);
    },
    signInError: (state, action) => {
      (state.error = action.payload), (state.isLoading = false);
    },

    signUpStart: (state, action) => {
      (state.isLoading = true), (state.error = null);
    },

    signUpSuccess: (state, action) => {
      state.isLoading = false;
      (state.error = null), (state.user = action.payload);
    },

    signUpFailure: (state, action) => {
      (state.error = action.payload), (state.isLoading = false);
    },
  },
});

export const {
  signUpStart,
  signUpSuccess,
  signUpFailure,
  SignInStart,
  SignInSuccess,
  signInError,
} = authSlice.actions;

export const selectUser = (state) => state.auth.user;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectError = (state) => state.auth.error;

export default authSlice.reducer;
