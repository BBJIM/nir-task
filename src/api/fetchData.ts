import {reconciliatedData} from "../types/reconciliatedData";
import output from '../mock/output.json'

export const fetchData = async () => {
    try {
        // const response = await fetch('https://localhost:7126/Reconciliation/api/reconciled-data');
        // if (!response.ok) {
        //     throw new Error('Failed to fetch data');
        // }

        // const result: reconciliatedData = await response.json();
        // return result;

        return output;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};