import { Request, Response } from 'express';
import axios from 'axios';

/**
 * weatherForecast - responsible for analysing location and respond with a forecast of the given amount of days.
 * @param data in weatherForecast format from HTTP-request. Gather longitude, latitude, amount of days to forecast(max 16 days). 
 * @returns Weather alarm object
 */
export const weatherHistory = async (req: Request, res: Response) => {
    try {
        const { longitude, latitude } = req.query;

        const url = `https://archive-api.open-meteo.com/v1/archive?latitude=${latitude}&longitude=${longitude}&start_date=2003-07-14&end_date=2023-07-14&daily=temperature_2m_max,temperature_2m_mean&timezone=GMT`;
        
        const response = await axios.get(url);
        const data = response.data;
  
        res.json(data.daily); 
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the weather data.' });
    }
};