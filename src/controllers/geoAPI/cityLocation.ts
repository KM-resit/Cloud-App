import axios from "axios";

export async function cityFetch(city: String) {
    try {
        if (city === '' || city === null) {
            throw new Error("City cannot be null");
        }

        const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`;
        const response = await axios.get(url);
        const data = response.data;
        if (data && data.results && data.results.length > 0) {
            const coordinates = { 
                longitude: data.results[0].longitude,
                latitude: data.results[0].latitude
            };
            return coordinates;
        }
        throw new Error("City location cannot be gathered");
    }
    catch (error) {
        return 'An error occurred while fetching the location data.' ;
    }
};