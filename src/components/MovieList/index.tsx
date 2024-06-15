import MovieCard from "../MovieCard";
import './movie-list.scss';


const MovieList = () => {

    return (
        <div className={'movie-list'}>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
        </div>

    );
}



export default MovieList;