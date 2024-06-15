import {createAsyncThunk} from "@reduxjs/toolkit";
import {movies$} from "../movies";


export const getMovies =  createAsyncThunk('movie/getMovies', async () => {
        return await movies$;
        }
    );

