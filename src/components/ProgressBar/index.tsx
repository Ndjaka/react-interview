import './progress-bar.scss';

interface ProgressBarProps {
    likes: number;
    dislikes: number;

}
const ProgressBar = (props : ProgressBarProps) => {
   const {likes, dislikes} = props;
    return (
        <div className={'progress-bar'}>
            <div
                style={{
                    width: `${likes / (likes + dislikes) * 100}%`
                }}
                className="progress-bar__inner"></div>
        </div>
    )
}

export default ProgressBar;