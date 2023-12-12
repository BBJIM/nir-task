import styled from "styled-components"
import React, {useState} from "react";
import {resourceType} from "../types/resourceType";

type Props = {setFilter: React.Dispatch<string | undefined>, filter?: string};

const Button = styled.button`
    margin: 0 10px;
`

const FilterInput = ({setFilter, filter}: Props) => {
    const debounce = (func: Function, delay: number) => {
        let timeoutId: any;
        return (...args: any[]) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func(...args), delay);
        };
    };

    const handleFilterChange = debounce((value: string) => {
        setFilter(value);
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


const Filter = React.memo(({setFilter, filter}: Props) => {
    // TODO: what is this button
    const [resourceTypeFilter, setResourceTypeFilter] = useState<resourceType>();

    return (
        <div>
            <Button onClick={() => { }}>set resource type</Button>
            <FilterInput setFilter={setFilter} filter={filter} />
        </div>
    )
})

export default Filter;