import express, { Request, Response } from 'express';
import { nextDayWeather, currentWeather } from './controllers/weatherAlarm';
import { weatherForecast } from './controllers/weatherForecast';
import { weatherHistory, weatherHistoryPerMonth } from './controllers/weatherHistory';
/**
 * Application startup 
 */
const app = express();
const cors = require('cors');

const corsOptions = {
    origin: "*",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  };

  
app.use(cors(corsOptions));

const port = 3000;

// app.get('/', (req: Request, res: Response) => {
//     res.send('Hello, World!');
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// }); 

app.get('/nextDayWeather', nextDayWeather);
app.get('/currentWeather', currentWeather);
app.get('/weatherForecast', weatherForecast); // will allow minimum forecast 1 day, max forecast 16 days
app.get('/weatherHistory', weatherHistory);
app.get('/weatherHistoryPerMonth', weatherHistoryPerMonth);

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 

export default server;