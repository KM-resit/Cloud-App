"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const weatherAlarm_1 = require("./controllers/weatherAlarm");
const cors = require('cors');
const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
};
const app = (0, express_1.default)();
app.use(cors(corsOptions));
const port = 3000;
app.get('/nextDayWeather', weatherAlarm_1.nextDayWeather);
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
exports.default = server;
//# sourceMappingURL=index.js.map