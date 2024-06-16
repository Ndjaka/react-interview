import { useMemo } from 'react';
import './progress-bar.scss';

interface ProgressBarProps {
    likes: number;
    dislikes: number;
}

const ProgressBar = (props: ProgressBarProps) => {
    const { likes, dislikes } = props;

    const percentage = useMemo(() => {
        const total = likes + dislikes;
        return total > 0 ? (likes / total) * 100 : 0;
    }, [likes, dislikes]);

    return (
        <div
            data-testid={'progress-bar'}
            className={'progress-bar'}>
            <div
                style={{
                    width: `${percentage}%`
                }}
                className="progress-bar__inner"></div>
        </div>
    );
}

export default ProgressBar;
