import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const FindMovie = createAsyncThunk("Content/FindMovies",
    async (searchQuery) => {
        try {
            const response = await axios(`https://www.omdbapi.com/?t=${searchQuery}&apikey=${process.env.REACT_APP_API_KEY}`)
            const Poster = await axios(`https://wallhaven.cc/api/v1/search?q=${searchQuery}&resolutions=1920x1080`)
            try {
                const Trailer = await axios(`https://api.kinocheck.de/movies?imdb_id=${response.data.imdbID}`)
                const Trailer_ID = Trailer.data.trailer.youtube_video_id
                response.data = { ...response.data, trailerLink: `https://www.youtube.com/embed/${Trailer_ID}` }
            } catch (e) {
                console.log(e);
            }
            if (response.data && (Poster.data.data?.length >= 1)) {
                const randomNumber = Math.floor(Math.random() * Poster.data.data.length)
                response.data.Poster = Poster.data.data[randomNumber].path
            }
            return response.data
        } catch (e) {
            return e
        }
    }
)

export const Movies = createSlice({
    name: "content",
    initialState: {
        content: [],
        loading: true,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(FindMovie.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(FindMovie.fulfilled, (state, action) => {
                state.loading = false;
                action.payload.message ? state.error = action.payload.response.data.error : state.content = action.payload;
            });
    },
})