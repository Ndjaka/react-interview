import {createAsyncThunk} from "@reduxjs/toolkit";
import {movies$} from "../movies.ts";


export const getMovies =  createAsyncThunk('movie/getMovies', async () => {
        return await movies$;
        }
    );

