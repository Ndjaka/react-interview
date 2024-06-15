import './filter.scss';
import Select from "react-select";
import './filter.scss';
const Filter = () => {

    const options = [
        { value: 'Comedy', label: 'Comedy' },
        { value: 'Action', label: 'Action' },
        { value: 'Horror', label: 'Horror' },
        { value: 'Romance', label: 'Romance' },
    ];

    const handleChange = (selectedOption: any) => {
        console.log(selectedOption);
    }

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