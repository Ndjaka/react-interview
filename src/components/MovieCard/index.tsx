import React, { useCallback } from 'react';
import ProgressBar from "../ProgressBar";
import './movie-card.scss';
import { ThumbsDown, ThumbsUp, Trash } from "react-feather";

interface MovieCardProps {
    title: string;
    category: string;
    likes: number;
    dislikes: number;
    onDelete: () => void;
    liked?: boolean;
    disliked?: boolean;
    onToggleLike?: () => void;
    onToggleDislike?: () => void;
    image?: string;
}

const MovieCard = React.memo((props: MovieCardProps) => {
    const {
        title,
        category,
        likes,
        dislikes,
        onDelete,
        liked,
        disliked,
        onToggleDislike,
        onToggleLike,
        image
    } = props;

    const handleToggleLike = useCallback(() => {
        if (onToggleLike) {
            onToggleLike();
        }
    }, [onToggleLike]);

    const handleToggleDislike = useCallback(() => {
        if (onToggleDislike) {
            onToggleDislike();
        }
    }, [onToggleDislike]);

    const handleDelete = useCallback(() => {
        onDelete();
    }, [onDelete]);

    return (
        <div
            data-testid={'movie-card'}
            className={'movie-card'}
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
            }}>
            <div className={'movie-card__content'}>
                <div className={'movie-card__content__title'}>
                    <h4>{title}</h4>
                    <p>{category}</p>
                </div>
                <ProgressBar likes={likes} dislikes={dislikes} />
                <div className={'movie-card__content__actions'}>
                    <div className={'movie-card__content__actions-likes'}>
                        <div onClick={handleToggleLike} data-testid={'like'}>
                            <ThumbsUp
                                data-testid={'thumbs-up'}
                                color={liked ? '#faf9f9' : '#4A5555'}
                                size={20}
                            /> <span>{likes}</span>
                        </div>
                        <div onClick={handleToggleDislike} data-testid={'dislike'}>
                            <ThumbsDown
                                data-testid={'thumbs-down'}
                                color={disliked ? '#faf9f9' : '#4A5555'}
                                size={18}
                            /><span>{dislikes}</span>
                        </div>
                    </div>
                    <div className={'movie-card__content__actions-delete'} onClick={handleDelete} data-testid={'delete'}>
                        <Trash
                            data-testid={'trash'}
                            color={'#4A5555'}
                            size={20}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
});

export default MovieCard;
