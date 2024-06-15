import ProgressBar from "../ProgressBar";

import './movie-card.scss';
import {ThumbsDown, ThumbsUp, Trash} from "react-feather";

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
}

const MovieCard = (props: MovieCardProps) => {
    const {title, category, likes, dislikes, onDelete , liked,disliked, onToggleDislike,    onToggleLike} = props;

    return (
        <div className={'movie-card'}>
            <h4 className={'movie-card__title'}>{title}</h4>
            <p className={'movie-card__category'}>{category}</p>
            <ProgressBar dislikes={dislikes} likes={likes}/>
            <div className={'movie-card__actions'}>
                <div className={'movie-card__actions-likes'}>
                    <button onClick={onToggleLike}>

                        <ThumbsUp
                            color={liked ? '#82a9f8' : '#000'}
                            size={20}
                        /> <span> {likes}</span>
                    </button>
                    <button onClick={onToggleDislike}>
                        <ThumbsDown
                            color={disliked ? '#82a9f8' : '#000'}
                            size={20}
                        /><span>{dislikes}</span>
                    </button>
                </div>

                <button className={'movie-card__actions-delete'} onClick={onDelete}>
                    <Trash
                        color={'rgba(213,0,0,0.68)'}
                        size={20}
                    />
                </button>
            </div>
        </div>
    )
}

export default MovieCard;