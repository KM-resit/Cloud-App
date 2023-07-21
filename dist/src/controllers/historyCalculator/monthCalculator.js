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
        const averageTemperature = calculateTempurature(byYearAndMonth);
    }
    console.log(byYearAndMonth);
    console.log(result);
}
exports.calculatePerMonth = calculatePerMonth;
function calculateTempurature(data) {
    console.log(data);
}
exports.calculateTempurature = calculateTempurature;
//# sourceMappingURL=monthCalculator.js.map