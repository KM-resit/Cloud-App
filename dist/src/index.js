"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const weatherAlarm_1 = require("./controllers/weatherAlarm");
const weatherForecast_1 = require("./controllers/weatherForecast");
const weatherHistory_1 = require("./controllers/weatherHistory");
const app = (0, express_1.default)();
const cors = require('cors');
const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
const port = 3000;
app.get('/nextDayWeather', weatherAlarm_1.nextDayWeather);
app.get('/currentWeather', weatherAlarm_1.currentWeather);
app.get('/weatherForecast', weatherForecast_1.weatherForecast);
app.get('/weatherHistory', weatherHistory_1.weatherHistory);
app.get('/weatherHistoryPerMonth', weatherHistory_1.weatherHistoryPerMonth);
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
exports.default = server;
//# sourceMappingURL=index.js.map