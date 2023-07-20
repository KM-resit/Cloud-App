"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePerMonth = void 0;
function calculatePerMonth(data) {
    const temperaturesByYearAndMonth = {};
    for (let i = 0; i < data.time.length; i++) {
        const date = new Date(data.time[i]);
        const year = date.getFullYear();
        const month = date.getMonth();
        const temperature = data.temperature_2m_mean[i];
        if (!temperaturesByYearAndMonth[year]) {
            temperaturesByYearAndMonth[year] = {};
        }
        if (!temperaturesByYearAndMonth[year][month]) {
            temperaturesByYearAndMonth[year][month] = [temperature];
        }
        else {
            temperaturesByYearAndMonth[year][month].push(temperature);
        }
    }
    console.log(temperaturesByYearAndMonth);
}
exports.calculatePerMonth = calculatePerMonth;
//# sourceMappingURL=monthCalculator.js.map