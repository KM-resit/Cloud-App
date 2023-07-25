import express, { Request, Response } from 'express';
import { nextDayWeather, currentWeather } from './controllers/weatherAlarm';
import { weatherForecast } from './controllers/weatherForecast';
import { weatherHistory, weatherHistoryPerMonth } from './controllers/weatherHistory';
/**
 * Application startup 
 */
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const {poolConnect, pool} = require("./database/db");

const corsOptions = {
    origin: "*",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  };

  
app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// }); 

app.get('/nextDayWeather', nextDayWeather);
app.get('/currentWeather', currentWeather);
app.get('/weatherForecast', weatherForecast); // will allow minimum forecast 1 day, max forecast 16 days
app.get('/weatherHistory', weatherHistory);
app.get('/weatherHistoryPerMonth', weatherHistoryPerMonth);
app.get("/database", async (req, res) => {
    try {
        await poolConnect;
        const request = pool.request();
        const result = await request.query("SELECT * FROM [dbo].[User]");
        res.json(result.recordset);
    } catch (err: any) {
        console.error("Error getting the data from database: ", err.message);
        res.status(500).json({message: "Server error"});
    }
});


const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 

export default server;