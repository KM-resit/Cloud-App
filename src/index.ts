import express, { Request, Response } from 'express';
import { nextDayWeather } from './controllers/weatherAlarm';
/**
 * Application startup 
 */
const cors = require('cors');

const corsOptions = {
    origin: "*",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  };

  
const app = express();
app.use(cors(corsOptions));

const port = 3000;

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// }); 

app.get('/nextDayWeather', nextDayWeather);

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 

export default server;