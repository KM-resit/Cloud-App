import { Request, Response } from 'express';
import { cityFetch } from './geoAPI/cityLocation';
import { determineDates } from './historyCalculator/dateCalculator';
import { calculatePerMonth } from './historyCalculator/monthCalculator';
import axios from 'axios';

/**
 * weatherForecast - responsible for analysing location and respond with a forecast of the given amount of days.
 * @param data in weatherForecast format from HTTP-request. Gather longitude, latitude, amount of days to forecast(max 16 days). 
 * @returns Weather alarm object
 */
export const weatherHistory = async (req: Request, res: Response) => {
    try {
        const city: string = req.query.city as string; // Specify the type as string

        const cityLocation = await cityFetch(city);

        if (typeof cityLocation === 'string') {
            throw new Error(cityLocation); // Re-throw the error as an exception
        }

        const today = new Date();
        const date = determineDates(today);

        const { longitude, latitude } = cityLocation;

        const url = `https://archive-api.open-meteo.com/v1/archive?latitude=${cityLocation.latitude}&longitude=${cityLocation.longitude}&start_date=${date.startDate}&end_date=${date.endDate}&daily=temperature_2m_mean&timezone=GMT`;
        
        const response = await axios.get(url);
        const data = response.data;
  
        res.json(data.daily); 
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the weather data.' });
    }
};

export const weatherHistoryPerMonth = async (req: Request, res: Response) => {
    try {
        const city: string = req.query.city as string; // Specify the type as string

        const cityLocation = await cityFetch(city);

        if (typeof cityLocation === 'string') {
            throw new Error(cityLocation); // Re-throw the error as an exception
        }

        const today = new Date();
        const date = determineDates(today);

        const { longitude, latitude } = cityLocation;

        const url = `https://archive-api.open-meteo.com/v1/archive?latitude=${cityLocation.latitude}&longitude=${cityLocation.longitude}&start_date=${date.startDate}&end_date=${date.endDate}&daily=temperature_2m_mean&timezone=GMT`;
        const response = await axios.get(url);
        const data = response.data;
        //console.log(data.daily);
        const result = await calculatePerMonth(data.daily);
  
        res.json(result); 
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the weather data.' });
    }
};
