import {ImageKeys, RepositoryKeys, reconciliatedData} from "../types/reconciliatedData";

const keyWhitelist: (RepositoryKeys | ImageKeys)[] = ['name'];

export const filterData = (records?: reconciliatedData[], filter?: string) => {
    if (filter && records) {
        return records.filter((record: reconciliatedData) => {
            // Filter logic based on your requirements and the key whitelist
            return keyWhitelist.some((key) => {
                const lowercasedFilter = filter.toLowerCase();
                const recordValue = record.Repository[(key as RepositoryKeys)]?.toString().toLowerCase() || '';
                return recordValue.includes(lowercasedFilter);
            }) || keyWhitelist.some((key) => {
                const lowercasedFilter = filter.toLowerCase();
                const recordValue = record.Image[key as ImageKeys]?.toString().toLowerCase() || '';
                return recordValue.includes(lowercasedFilter);
            });
        });
    }
    return records || [];
}