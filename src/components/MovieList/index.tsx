import MovieCard from "../MovieCard";
import './movie-list.scss';

interface MovieListProps {
    movies: MovieType[];
    onDelete: (id: number) => void;
    onToggleLike: (id: number) => void;
    onToggleDislike: (id: number) => void;
}
const MovieList = (props : MovieListProps) => {

    const {movies, onDelete, onToggleLike, onToggleDislike} = props;

    return (
        <div className={'movie-list'}>
            {movies.map(movie => (
                <MovieCard
                    key={movie.id}
                    title={movie.title}
                    category={movie.category}
                    likes={movie.likes}
                    dislikes={movie.dislikes}
                    onDelete={() => onDelete(Number(movie.id))}
                    liked={movie.liked}
                    disliked={movie.disliked}
                    onToggleLike={() => onToggleLike(Number(movie.id))}
                    onToggleDislike={() => onToggleDislike(Number(movie.id))}
                />
            ))}

        </div>

    );
}


export default MovieList;