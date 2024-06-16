import { useEffect, useMemo, useState } from "react";
import ReactLoading from "react-loading";
import { useAppDispatch, useAppSelector } from "./hooks";
import { getMovies } from "./services/MovieService";
import {setDeleteMovie, setToggleDislike, setToggleLike} from "./features/movie/movieSlice.ts";

import './app.scss';
import Filter from "./components/Filter";
import Pagination from "./components/Pagination";
import MovieList from "./components/MovieList";

function App() {
    const { status, movies } = useAppSelector(state => state.movie);
    const dispatch = useAppDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage, setMoviesPerPage] = useState(8);
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);



    const lastMovieIndex = useMemo(() => currentPage * moviesPerPage, [currentPage, moviesPerPage]);

    const firstMovieIndex = useMemo(() =>  lastMovieIndex - moviesPerPage, [lastMovieIndex, moviesPerPage]);


    const filteredMovies = useMemo(() => {
        return movies.filter(movie => categories.length === 0 || categories.includes(movie.category));
    }, [movies, categories]);

    const currentMovies = useMemo(() => filteredMovies.slice(firstMovieIndex, lastMovieIndex),
        [filteredMovies, firstMovieIndex, lastMovieIndex]);

    const handlePaginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const handleChangeCategories = (selectedOption: any) => {
        setCategories(selectedOption.map((option: any) => option.value));
    };

    const handleToggleLike = (id: string) => {
        dispatch(setToggleLike(Number(id)));
    };

    const handleDelete = (id: string) => {

        if(currentMovies.length === 1 && currentPage == 1){
            setCategories([]);
        }

        dispatch(setDeleteMovie(Number(id)));
    };

    const handleToggleDislike = (id: string) => {
        dispatch(setToggleDislike(Number(id)));
    };

    return (
        <div className="container" data-testid="app">
            <div className="container__header">
                <h1>Movies</h1>
                <Filter
                    values={categories.map(category => ({ value: category, label: category }))}
                    movies={movies}
                    handleChange={handleChangeCategories}
                />
            </div>

            <div className="container__content">
                <div className="container__content__status">
                    {status === 'loading' && <ReactLoading type="spin"
                                                           color="#FFFFFF"
                                                           height={25} width={25} />
                    }
                    {status === 'failed' && <p>Failed to fetch movies</p>}
                    {status === 'idle' && movies.length === 0 && <p>No movies found</p>}
                </div>

                {currentMovies.length > 0 && (
                    <MovieList
                        movies={currentMovies}
                        onDelete={handleDelete}
                        onToggleLike={handleToggleLike}
                        onToggleDislike={handleToggleDislike}
                    />
                )}
            </div>

            {currentMovies.length > 0 && (
            <Pagination
                currentPage={currentPage}
                moviesPerPage={moviesPerPage}
                onPaginate={handlePaginate}
                setMoviesPerPage={setMoviesPerPage}
                totalMovies={filteredMovies.length}
            />
            )}
        </div>
    );
}

export default App;
