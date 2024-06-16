import React, { useCallback } from 'react';
import MovieCard from "../MovieCard";
import './movie-list.scss';

interface MovieType {
    id: string;
    title: string;
    category: string;
    likes: number;
    dislikes: number;
    liked?: boolean;
    disliked?: boolean;
    image?: string;
}

interface MovieListProps {
    movies: MovieType[];
    onDelete: (id: string) => void;
    onToggleLike: (id: string) => void;
    onToggleDislike: (id: string) => void;
}

const MovieList = (props: MovieListProps) => {
    const { movies, onDelete, onToggleLike, onToggleDislike } = props;

    const handleDelete = useCallback((id: string) => {
        onDelete(id);
    }, [onDelete]);

    const handleToggleLike = useCallback((id: string) => {
        onToggleLike(id);
    }, [onToggleLike]);

    const handleToggleDislike = useCallback((id: string) => {
        onToggleDislike(id);
    }, [onToggleDislike]);

    return (
        <div className='movie-list' data-testid='movie-list'>
            {movies.map(movie => (
                <MovieCard
                    key={movie.id}
                    title={movie.title}
                    category={movie.category}
                    likes={movie.likes}
                    dislikes={movie.dislikes}
                    onDelete={() => handleDelete(movie.id)}
                    liked={movie.liked}
                    image={movie.image}
                    disliked={movie.disliked}
                    onToggleLike={() => handleToggleLike(movie.id)}
                    onToggleDislike={() => handleToggleDislike(movie.id)}
                />
            ))}
        </div>
    );
}

export default React.memo(MovieList);
