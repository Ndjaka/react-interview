import { vi } from "vitest";
import { render, fireEvent } from "../../test/test-utils.tsx";
import MovieList from "./index.tsx";

const movies = [
    {
        title: 'test',
        disliked: false,
        liked: false,
        dislikes: 12,
        category: 'test1',
        likes: 9,
        id: '1',
        image: 'test'
    },
    {
        title: 'test2',
        disliked: false,
        liked: false,
        dislikes: 11,
        category: 'test2',
        likes: 10,
        id: '2',
        image: 'test2'
    },
];

describe('MovieList', () => {
    let mockDelete: ReturnType<typeof vi.fn>;
    let mockToggleLike: ReturnType<typeof vi.fn>;
    let mockToggleDislike: ReturnType<typeof vi.fn>;

    beforeEach(() => {
        mockDelete = vi.fn();
        mockToggleLike = vi.fn();
        mockToggleDislike = vi.fn();
    });

    it('should render components without crashing', () => {
        const { getByTestId,getByText } = render(<MovieList
            movies={movies}
            onDelete={mockDelete}
            onToggleLike={mockToggleLike}
            onToggleDislike={mockToggleDislike}
        />);

        const movieList = getByTestId('movie-list');
        expect(movieList).toBeInTheDocument();
        expect(getByText('test')).toBeInTheDocument();
    });

    it('should have 2 cards', () => {
        const { getAllByTestId } = render(<MovieList
            movies={movies}
            onDelete={mockDelete}
            onToggleLike={mockToggleLike}
            onToggleDislike={mockToggleDislike}
        />);

        const movieCards = getAllByTestId('movie-card');
        expect(movieCards.length).toBe(2);
    });

    it('should like movie', async () => {
        const {debug, findAllByTestId } = render(<MovieList
            movies={movies}
            onDelete={mockDelete}
            onToggleLike={mockToggleLike}
            onToggleDislike={mockToggleDislike}
        />);

        const likeButtons = await findAllByTestId('like');
        likeButtons.forEach((button, index) => {
            fireEvent.click(button);
            expect(mockToggleLike).toHaveBeenCalledWith(movies[index].id);
        });

        debug();
    });

    it('should dislike movie', async () => {
        const { findAllByTestId } = render(<MovieList
            movies={movies}
            onDelete={mockDelete}
            onToggleLike={mockToggleLike}
            onToggleDislike={mockToggleDislike}
        />);

        const dislikeButtons = await findAllByTestId('dislike');
        dislikeButtons.forEach((button, index) => {
            fireEvent.click(button);
            expect(mockToggleDislike).toHaveBeenCalledWith(movies[index].id);
        });
    });

    it('should delete movie', async () => {
        const { findAllByTestId } = render(<MovieList
            movies={movies}
            onDelete={mockDelete}
            onToggleLike={mockToggleLike}
            onToggleDislike={mockToggleDislike}
        />);

        const deleteButtons = await findAllByTestId('delete');
        deleteButtons.forEach((button, index) => {
            fireEvent.click(button);
            expect(mockDelete).toHaveBeenCalledWith(movies[index].id);
        });
    });
});
