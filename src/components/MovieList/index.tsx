import MovieCard from "../MovieCard";
import './movie-list.scss';

interface MovieListProps {
    movies: MovieType[];
    onDelete: (id: string) => void;
    onToggleLike: (id: string) => void;
    onToggleDislike: (id: string) => void;
}
const MovieList = (props : MovieListProps) => {

    const {movies, onDelete, onToggleLike, onToggleDislike} = props;

    return (
        <div className={'movie-list'} data-testid={'movie-list'}>
            {movies.map(movie => (
                <MovieCard
                    key={movie.id}
                    title={movie.title}
                    category={movie.category}
                    likes={movie.likes}
                    dislikes={movie.dislikes}
                    onDelete={() => onDelete(movie.id)}
                    liked={movie.liked}
                    image={movie.image}
                    disliked={movie.disliked}
                    onToggleLike={() => onToggleLike(movie.id)}
                    onToggleDislike={() => onToggleDislike(movie.id)}
                />
            ))}

        </div>

    );
}


export default MovieList;