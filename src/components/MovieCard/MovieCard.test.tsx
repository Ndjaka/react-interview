import {describe, vi} from "vitest";
import MovieCard from "./index.tsx";
import {render} from "../../test/test-utils.tsx";

const func = vi.fn();

describe('MovieCard', () => {
    it('should render components without crashing', () => {
        const {debug, getByTestId} =
            render(<MovieCard title={"test"}
                              category={"test"}
                              likes={0}
                              dislikes={0}
                              onDelete={func}
                                liked={false}
                                disliked={false}
                                onToggleLike={func}
                              />);

        const movieCard = getByTestId('movie-card');

        expect(movieCard).toBeInTheDocument();
        debug();
    });

    it('should show title and category', () => {
        const {debug, getByText} =
            render(<MovieCard title={"test1"}
                              category={"test3"}
                              likes={0}
                              dislikes={0}
                              onDelete={func}
                              liked={false}
                              disliked={false}
                              onToggleLike={func}
            />);

        const title = getByText('test1');
        const category = getByText('test3');

        expect(title).toBeInTheDocument();
        expect(category).toBeInTheDocument();

        debug();

    });

    it('should have progress bar components', () => {
        const {debug, getByTestId} =
            render(<MovieCard title={"test"}
                              category={"test"}
                              likes={0}
                              dislikes={0}
                              onDelete={func}
                              liked={false}
                              disliked={false}
                              onToggleLike={func}
            />);

        const progressBar = getByTestId('progress-bar');

        expect(progressBar).toBeInTheDocument();
        debug();

    });

    it('should have actions like and dislike', () => {
        const {debug, getByText} =
            render(<MovieCard title={"test"}
                              category={"test"}
                              likes={1}
                              dislikes={2}
                              onDelete={func}
                              liked={false}
                              disliked={false}
                              onToggleLike={func}
            />);

        const likeNumber = getByText('1');
        const dislikeNumber = getByText('2');

        expect(likeNumber).toBeInTheDocument();
        expect(dislikeNumber).toBeInTheDocument();

        debug();

    });

    it('should have like button , dislike button and delete button', () => {

        const {debug, getByTestId} =
            render(<MovieCard title={"test"}
                              category={"test"}
                              likes={1}
                              dislikes={2}
                              onDelete={func}
                              liked={false}
                              disliked={false}
                              onToggleLike={func}
            />);

        const likeButton = getByTestId('thumbs-up');
        const dislikeButton = getByTestId('thumbs-down');
        const deleteButton = getByTestId('trash');

        expect(likeButton).toBeInTheDocument();
        expect(dislikeButton).toBeInTheDocument();
        expect(deleteButton).toBeInTheDocument();

        debug();

    });
});