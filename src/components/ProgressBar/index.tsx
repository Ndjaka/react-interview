import './progress-bar.scss';

const ProgressBar = () => {
    const likes = 100;
    const dislikes = 50;
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