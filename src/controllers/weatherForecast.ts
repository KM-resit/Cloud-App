import { Request, Response } from 'express';
import axios from 'axios';

export const weatherForecast = async (req: Request, res: Response) => {
    try {
        const { longitude, latitude, days } = req.query;

        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 1);
        const tomorrowDate = currentDate.toISOString().slice(0, 10);

        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,windspeed_10m_max,winddirection_10m_dominant&timezone=auto&forecast_days=${days}`;
        const response = await axios.get(url);
        const data = response.data;
           
        res.json(data.daily); 
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the weather data.' });
    }
};