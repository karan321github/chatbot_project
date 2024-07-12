import { configureStore } from "@reduxjs/toolkit";
import authReducers from './reducers/userSlice.js'

export const store  = configureStore({
    reducer: {
        authReducers
    } 
})