import './pagination.scss';
import {ChevronLeft, ChevronRight} from "react-feather";

const Pagination = () => {
    return (
        <div className={'pagination'}>
            <button >
                <ChevronLeft/>
            </button>
            <button >
                <ChevronRight/>
            </button>
            <select >
                <option value={4}>4</option>
                <option value={8}>8</option>
                <option value={12}>12</option>
            </select>
        </div>
    );
}

export default Pagination;