import { reconciliatedData } from "../types/reconciliatedData";
import { filterState } from '../types/resourceType';

export const filterData = (records?: reconciliatedData, filterObject?: filterState) : reconciliatedData => {
    if(records) {
        const filteredRecords = {...records};
        if (filterObject && filterObject.filter) {
            console.log(filteredRecords, filteredRecords[filterObject.resourceType], filterObject);
            const arr = filteredRecords[filterObject.resourceType]?.filter((record) => {
                const keys = Object.keys(record);
                return keys.some((key) => {
                    const lowercasedFilter = filterObject.filter.toLowerCase();
                    const recordValue = record[key]?.toString().toLowerCase() || '';
                    return recordValue.includes(lowercasedFilter);
                });
            }) || [];
            filteredRecords[filterObject.resourceType] = [...arr];
        }
        return filteredRecords;
    }
    return {};
}