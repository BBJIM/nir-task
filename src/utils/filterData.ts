import {Image, Repository, reconciliatedData} from "../types/reconciliatedData";
import {filterState} from '../types/resourceType';

export const filterData = (records?: reconciliatedData, filterObject?: filterState): (Image | Repository)[] => {
    if (records) {
        if (filterObject && filterObject.resourceType) {
            return records[filterObject.resourceType];
        }
        return records.Image || [];
    }
    return [];
}