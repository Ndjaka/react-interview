import {render} from "../../test/test-utils.tsx";
import Pagination from "./index.tsx";
import {vi} from "vitest";
import {fireEvent} from "@testing-library/react";


describe('Pagination', () => {
    let mockOnPaginate: ReturnType<typeof vi.fn>;
    let mockSetMoviesPerPage: ReturnType<typeof vi.fn>;

    beforeEach(() => {
        mockOnPaginate = vi.fn();
        mockSetMoviesPerPage = vi.fn();
    });

    it('should render components without crashing', () => {
        const {getByTestId, getByText} = render(<Pagination
            totalMovies={10}
            moviesPerPage={4}
            onPaginate={mockOnPaginate}
            currentPage={1}
            setMoviesPerPage={mockSetMoviesPerPage}
        />);

        const pagination = getByTestId('pagination');
        expect(pagination).toBeInTheDocument();
        expect(getByText('1 / 3')).toBeInTheDocument();
    });

    it('should paginate next page', () => {

        const {getByTestId, getByText} = render(<Pagination
            totalMovies={10}
            moviesPerPage={4}
            onPaginate={mockOnPaginate}
            currentPage={1}
            setMoviesPerPage={mockSetMoviesPerPage}
        />);

        expect(getByText('1 / 3')).toBeInTheDocument();

        const nextButton = getByTestId('next-button');
        fireEvent.click(nextButton);

        expect(mockOnPaginate).toHaveBeenCalledWith(2);

    });

});