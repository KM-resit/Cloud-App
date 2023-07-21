"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTempurature = exports.calculatePerMonth = void 0;
function calculatePerMonth(data) {
    const byYearAndMonth = {};
    for (let i = 0; i < data.time.length; i++) {
        const date = new Date(data.time[i]);
        const year = date.getFullYear();
        const month = date.getMonth();
        const temperature = data.temperature_2m_mean[i];
        if (!byYearAndMonth[year]) {
            byYearAndMonth[year] = {};
        }
        if (!byYearAndMonth[year][month]) {
            byYearAndMonth[year][month] = [temperature];
        }
        else {
            byYearAndMonth[year][month].push(temperature);
        }
    }
    const result = {};
    for (const year in byYearAndMonth) {
        const averageTemperature = calculateTempurature(byYearAndMonth[year]);
        result[parseInt(year)] = averageTemperature;
    }
    return result;
}
exports.calculatePerMonth = calculatePerMonth;
function calculateTempurature(data) {
    const averages = {};
    for (const month in data) {
        const temperatures = data[month];
        const sum = temperatures.reduce((acc, temp) => acc + temp, 0);
        const average = sum / temperatures.length;
        const averageOneDecimal = parseFloat(average.toFixed(1));
        averages[parseInt(month)] = averageOneDecimal;
    }
    return averages;
}
exports.calculateTempurature = calculateTempurature;
//# sourceMappingURL=monthCalculator.js.map