import './pagination.scss';
import {ChevronLeft, ChevronRight} from "react-feather";

interface PaginationProps {
    totalMovies: number;
    moviesPerPage: number;
    onPaginate: (page: number) => void;
    currentPage: number;
    setMoviesPerPage: (perPage: number) => void;
}
const Pagination = (props : PaginationProps) => {
    const {totalMovies, moviesPerPage, onPaginate, currentPage, setMoviesPerPage} = props;

    const totalPages = Math.ceil(totalMovies / moviesPerPage);

    const handleChangePage = (page: number) => {
        onPaginate(page);
    }

    const handleChangePerPage = (e: any) => {
        setMoviesPerPage(e.target.value);
    }

    return (
        <div className={'pagination'}>
            <button
                disabled={currentPage === 1}
                onClick={() => handleChangePage(currentPage - 1)}>
                <ChevronLeft/>
            </button>
             <p>{currentPage} / {totalPages}</p>
            <button
                disabled={currentPage === totalPages}
                onClick={() => handleChangePage(currentPage + 1)}>
                <ChevronRight/>
            </button>
            <select onChange={handleChangePerPage} value={moviesPerPage}>
                <option value={4}>4</option>
                <option value={8}>8</option>
                <option value={12}>12</option>
            </select>
        </div>
    );
}

export default Pagination;