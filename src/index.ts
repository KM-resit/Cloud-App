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

const mssql = require('mssql');

// For connection to the db
const config = {
    user: "userWeather",
    password: "Admin123,!",
    server: "kmresitserver.database.windows.net",
    port: 1433,
    database: "WeatherAppResit",
    authentication: {
        type: "default"
    },
    options: {
        encrypt: true,
    },
};

async function connectToDatabase() {
    try {
        const pool = await mssql.connect(config);
        console.log("Reading rows from the table");
        const result = await pool.request().query("Select * from [dbo].[User]");
        console.log(result.recordset);

        pool.close();
        mssql.close();
    } catch (err: any) {
        console.error("Error connecting to the database: ", err.message);
    }
}

// connectToDatabase();

const corsOptions = {
    origin: "*",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  };

  
app.use(cors(corsOptions));

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

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 

export default server;