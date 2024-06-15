import {useState} from "react";
import ProgressBar from "../ProgressBar";

import './movie-card.scss';
import {ThumbsDown, ThumbsUp, Trash} from "react-feather";

const MovieCard = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className={'movie-card'}>
            <h4 className={'movie-card__title'}>Oceans 8</h4>
            <p className={'movie-card__category'}>Comedy</p>
            <ProgressBar/>
            <div className={'movie-card__actions'}>

                    <button className={'movie-card__actions-like'} onClick={() => setToggle(!toggle)}>
                        {toggle?
                            <ThumbsDown
                                color={'#282828'}
                                size={20}
                            /> :
                            <ThumbsUp
                            color={'#82a9f8'}
                            size={20}
                        />}
                    </button>

                <button className={'movie-card__actions-delete'}>
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