import { render, screen } from '../../test/test-utils.tsx';
import ProgressBar from './index.tsx';

describe('ProgressBar', () => {
    it('should render components', () => {
        render(<ProgressBar likes={1} dislikes={1} />);

        const progressBar = screen.getByTestId('progress-bar');
        const progressBarInner = progressBar.querySelector('.progress-bar__inner');

        expect(progressBar).toBeInTheDocument();
        expect(progressBarInner).toHaveStyle('width: 50%');
    });
});
