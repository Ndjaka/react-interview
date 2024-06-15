import './app.scss'
import Filter from "./components/Filter";
import Pagination from "./components/Pagination";
import {useAppDispatch, useAppSelector} from "./hooks";
import {useEffect, useState} from "react";
import {getMovies} from "./services/MovieService.ts";
import ReactLoading from "react-loading";
import MovieList from "./components/MovieList";
import {setDeleteMovie, setToggleDislike, setToggleLike} from "./features/movie/movieSlice.ts";

function App() {

    const {status, movies} = useAppSelector(state => state.movie)
    const dispatch = useAppDispatch()
    const [movieList, setMovieList] = useState<MovieType[]>([]);

    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

    useEffect(() => {
        setMovieList(movies)
    }, [movies]);

    const handleDelete = (id: number) => {
        dispatch(setDeleteMovie(id));
    }
    const handleToggleLike = (id: number) => {
        dispatch(setToggleLike(id));
    }

    const handleToggleDislike = (id: number) => {
        dispatch(setToggleDislike(id));
    }

    return (
        <div className={"container"}>
            <div className={"container__header"}>
                <h1>Movies</h1>
                <Filter
                    handleChange={(selectedOption: any) => {
                        if (selectedOption.length === 0) {
                            setMovieList(movies);
                        } else {
                            const filteredMovies = movies.filter(movie => selectedOption.some((option: any) => option.value === movie.category));
                            setMovieList(filteredMovies);
                        }
                    }
                    }
                />
            </div>

            <div className={"container__content"}>
                <div className={"container__content__status"}>
                    {status === 'loading' && <ReactLoading type={"spin"} color={"#000"} height={25} width={25}/> }
                    {status === 'failed' && <p>Failed to fetch movies</p>}
                    {status === 'idle' && movies.length === 0 && <p>No movies found</p>}
                </div>

                {
                    movieList.length > 0 && <MovieList
                        movies={movieList}
                        onDelete={handleDelete}
                        onToggleLike={handleToggleLike}
                        onToggleDislike={handleToggleDislike}
                    />
                }
            </div>

            <Pagination/>
        </div>
    )
}

export default App
