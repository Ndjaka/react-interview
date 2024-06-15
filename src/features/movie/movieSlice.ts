import {createSlice} from "@reduxjs/toolkit";
import {getMovies} from "../../services/MovieService.ts";

interface MovieState {
    status: 'initial' | 'idle' | 'loading' | 'failed';
    movies: MovieType[];
}

const initialState: MovieState = {
    status: 'initial',
    movies: [],
}

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setDeleteMovie: (state, action) => {
            state.movies = state.movies.filter(movie => Number(movie.id) !== action.payload)
        },

        setToggleLike: (state, action) => {
            state.movies = state.movies.map(movie => {
                if (Number(movie.id) === action.payload) {
                    if (movie.disliked) {
                        movie.disliked = false;
                        movie.dislikes--;
                    }

                    movie.liked = !movie.liked;
                    movie.likes = movie.liked ? movie.likes + 1 : movie.likes - 1;
                }
                return movie;
            })
        },

        setToggleDislike: (state, action) => {
            state.movies = state.movies.map(movie => {
                if (Number(movie.id) === action.payload) {
                    if (movie.liked) {
                        movie.liked = false;
                        movie.likes--;
                    }

                    movie.disliked = !movie.disliked;
                    movie.dislikes = movie.disliked ? movie.dislikes + 1 : movie.dislikes - 1;

                }
                return movie;
            })
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(getMovies.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getMovies.fulfilled, (state, action) => {
                state.status = 'idle';
                state.movies = action.payload;
            })
            .addCase(getMovies.rejected, (state) => {
                state.status = 'failed';
            }
        )
    }
})

export const {setDeleteMovie , setToggleDislike , setToggleLike} = movieSlice.actions;

export default movieSlice.reducer;