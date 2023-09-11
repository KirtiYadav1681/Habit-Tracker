import { configureStore } from "@reduxjs/toolkit";
import habitSlice from "../slices/habitSlice";

const store = configureStore({
    reducer: {
        habit:habitSlice
    }
});

export default store;