import './filter.scss';
import Select from "react-select";
import {useAppSelector} from "../../hooks";

interface FilterProps {
    handleChange: (selectedOption: any) => void;
}
const Filter = (props : FilterProps) => {

    const {handleChange} = props;
    const {movies} = useAppSelector(state => state.movie)
    const categories = new Set(movies.map(movie => movie.category));

    const options = Array.from(categories).map(category => ({
        value: category,
        label: category
    }));


    return (
        <div className={"filter"}>
            <Select
                className={"filter__select"}
                isMulti
                options={options}
                onChange={handleChange}
                placeholder="Filter by category"
            />
        </div>
    );
}

export default Filter;