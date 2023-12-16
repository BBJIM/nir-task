import React from "react";
import { FilterProps, filterState } from "../types/resourceType";
import ResourceSelect from './ResourceTypeButton';



const FilterInput = ({setFilter}: FilterProps) => {
    const debounce = (func: Function, delay: number) => {
        let timeoutId: any;
        return (...args: any[]) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func(...args), delay);
        };
    };

    const handleFilterChange = debounce((value: string) => {
        setFilter((prev) => ({...prev, filter: value}) as filterState);
    }, 300);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        handleFilterChange(value);
    };

    return (
        <input
            type='text'
            onChange={handleChange}
            placeholder='Filter'
        />
    );
};


const Filter = React.memo(({setFilter}: FilterProps) => {
    
    return (
        <div>
            <ResourceSelect setFilter={setFilter}/>
            <FilterInput setFilter={setFilter} />
        </div>
    )
})

export default Filter;