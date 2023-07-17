"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scanTemperature = exports.processNextDayWeather = void 0;
function processNextDayWeather(data) {
    console.log(data);
    let result;
    let temperatureResult;
    if (data !== null) {
        temperatureResult = scanTemperature(data.temperature_2m);
    }
    if (temperatureResult == true) {
        result = {
            result: true,
            type: 'Temperature'
        };
    }
    else {
        result = {
            result: false,
        };
    }
    return result;
}
exports.processNextDayWeather = processNextDayWeather;
;
function scanTemperature(data) {
    for (const item in data) {
        if (data.hasOwnProperty(item)) {
            const temperature = data[item];
            if (temperature >= 25) {
                return true;
            }
        }
    }
    return false;
}
exports.scanTemperature = scanTemperature;
;
//# sourceMappingURL=weatherCalculator.js.map