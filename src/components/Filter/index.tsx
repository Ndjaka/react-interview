import './filter.scss';
import Select from "react-select";

interface FilterProps {
    handleChange: (selectedOption: any) => void;
    movies: MovieType[];
    values: any;
}
const Filter = (props : FilterProps) => {

    const {handleChange , movies, values} = props;
    const categories = new Set(movies.map(movie => movie.category));

    const options = Array.from(categories)
        .map(category => ({
        value: category,
        label: category
    }));


    return (
        <div className={"filter"}>
            <Select
                className={"filter__select"}
                styles={{
                    control: (styles) => ({
                        ...styles,
                        backgroundColor: '#000000',
                        border: '1px solid #FAF9F9A1',
                        borderRadius: '5px',
                        color: '#4A5555',
                        padding: '10px',
                        boxShadow: '0 0 5px rgba(0,0,0,0.1)',
                        cursor: 'pointer',
                        outline: 'none'
                    }),
                    option: (styles, {isFocused, isSelected}) => {
                        return {
                            ...styles,
                            backgroundColor: isSelected ? '#4A5555' : isFocused ? '#faf9f9' : '#faf9f9',
                            color: isSelected ? '#faf9f9' : isFocused ? '#4A5555' : '#4A5555',
                            cursor: 'pointer'
                        }
                    },
                     menu: (styles) => ({
                        ...styles,
                        backgroundColor: '#000000',
                        color: '#4A5555',
                        boxShadow: '0 0 5px rgba(0,0,0,0.1)',
                        cursor: 'pointer'
                     }
                    ),

                }
                }
                isMulti
                options={options}
                onChange={handleChange}
                value={values}
                placeholder="Filter by category"
            />
        </div>
    );
}

export default Filter;