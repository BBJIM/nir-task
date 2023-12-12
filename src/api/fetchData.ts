export const fetchData = async () => {
    try {
        // TODO: Replace 'YOUR_API_URL' with the actual API endpoint
        const response = await fetch('YOUR_API_URL');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};