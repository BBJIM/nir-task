import React from "react";
import {FilterProps} from "../types/resourceType";
import ResourceSelect from './ResourceTypeButton';


const Filter = React.memo(({setFilter}: FilterProps) => {
    return (
        <div>
            <ResourceSelect setFilter={setFilter} />
        </div>
    )
})

export default Filter;