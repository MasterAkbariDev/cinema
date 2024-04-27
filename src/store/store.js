import { configureStore } from "@reduxjs/toolkit";
import { Movies } from "./reducer";

const store = configureStore({
    reducer: {
        movies: Movies.reducer,
    }
})

export default store