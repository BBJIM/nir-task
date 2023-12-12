import {reconciliatedData} from "../types/reconciliatedData";

export const fetchData = async () => {
    try {
        // TODO: Replace 'YOUR_API_URL' with the actual API endpoint
        // const response = await fetch('YOUR_API_URL');
        // if (!response.ok) {
        //     throw new Error('Failed to fetch data');
        // }

        // const result: reconciliatedData[] = await response.json();
        // return result;

        return [
            {
                Repository: {
                    id: 'hello',
                    name: 'hello',
                    url: 'hello',
                    created_date_timestamp: 1,
                    updated_date_timestamp: 1,
                    scan_id: 1,
                    highest_severity: 'hello',
                    total_findings: 1,
                    scan_date_timestamp: 1,
                    connected_image_id: 'hello',
                    source: 'github',
                    last_push: 'hello',
                    size: 1,
                },
                Image: {
                    id: 'hello',
                    name: 'hello',
                    url: 'hello',
                    created_date_timestamp: 1,
                    updated_date_timestamp: 1,
                    scan_id: 1,
                    highest_severity: 'hello',
                    total_findings: 1,
                    scan_date_timestamp: 1,
                    connected_repository_id: 'hello',
                    source: 'dockerhub',
                    number_of_layers: 1,
                    architecture: 'arm',
                }
            },
            {
                Repository: {
                    id: 'hello2',
                    name: 'hello2',
                    url: 'hello2',
                    created_date_timestamp: 2,
                    updated_date_timestamp: 2,
                    scan_id: 2,
                    highest_severity: 'hello2',
                    total_findings: 2,
                    scan_date_timestamp: 2,
                    connected_image_id: 'hello2',
                    source: 'github',
                    last_push: 'hello2',
                    size: 2,
                },
                Image: {
                    id: 'hello2',
                    name: 'hello2',
                    url: 'hello2',
                    created_date_timestamp: 2,
                    updated_date_timestamp: 2,
                    scan_id: 2,
                    highest_severity: 'hello2',
                    total_findings: 2,
                    scan_date_timestamp: 2,
                    connected_repository_id: 'hello2',
                    source: 'dockerhub',
                    number_of_layers: 2,
                    architecture: 'arm',
                }
            },
            {
                Repository: {
                    id: 'hello3',
                    name: 'hello3',
                    url: 'hello3',
                    created_date_timestamp: 3,
                    updated_date_timestamp: 3,
                    scan_id: 3,
                    highest_severity: 'hello3',
                    total_findings: 3,
                    scan_date_timestamp: 3,
                    connected_image_id: 'hello3',
                    source: 'github',
                    last_push: 'hello3',
                    size: 3,
                },
                Image: {
                    id: 'hello3',
                    name: 'hello3',
                    url: 'hello3',
                    created_date_timestamp: 3,
                    updated_date_timestamp: 3,
                    scan_id: 3,
                    highest_severity: 'hello3',
                    total_findings: 3,
                    scan_date_timestamp: 3,
                    connected_repository_id: 'hello3',
                    source: 'dockerhub',
                    number_of_layers: 3,
                    architecture: 'arm',
                }
            },
        ] as reconciliatedData[]
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};