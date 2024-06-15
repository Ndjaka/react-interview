import { vi} from "vitest";
import {render} from "../../test/test-utils";
import Filter from "./index.tsx";

const func = vi.fn();

const movies : MovieType[] = [
    {
        title: 'test',
        disliked: false,
        liked: false,
        dislikes: 0,
        category: 'test1',
        likes: 0,
        id: '1',
        image: 'test'
    },
    {
        title: 'test2',
        disliked: false,
        liked: false,
        dislikes: 0,
        category: 'test2',
        likes: 0,
        id: '2',
        image: 'test2'
    },
];

describe('Filter', () => {

    it('should render components without crashing', () => {
        const {debug, getByTestId} = render(<Filter
            movies={movies}
            values={movies.map(movie => ({ value: movie.category, label: movie.category }))}
            handleChange={func}
        />);

        const filter = getByTestId('filter');
        expect(filter).toBeInTheDocument();
        debug();
    });

    it('should have one selected category', () => {
        const {debug, getByText} = render(<Filter
            movies={movies}
            handleChange={func}
            values={[{value: 'test1', label: 'test1'}]}
        />);

        const inputField = getByText('test1');

        expect(inputField).toBeInTheDocument();
        debug();

    });



});