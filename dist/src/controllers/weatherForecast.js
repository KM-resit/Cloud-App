"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.weatherForecast = void 0;
const axios_1 = __importDefault(require("axios"));
const weatherForecast = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { longitude, latitude, days } = req.query;
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 1);
        const tomorrowDate = currentDate.toISOString().slice(0, 10);
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,windspeed_10m_max,winddirection_10m_dominant&timezone=auto&forecast_days=${days}`;
        const response = yield axios_1.default.get(url);
        const data = response.data;
        console.log(data);
        res.json(data.daily);
    }
    catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the weather data.' });
    }
});
exports.weatherForecast = weatherForecast;
//# sourceMappingURL=weatherForecast.js.map