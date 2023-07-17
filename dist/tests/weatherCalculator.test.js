"use strict";
const weatherCalculator = require('../src/controllers/nextDayPrediction/weatherCalculator');
describe('scanTemperature', () => {
    it('should return correct weather report for the current hour', () => {
        const input = {
            0: 24, 1: 23.8, 2: 23.5, 3: 23.9, 4: 23.7,
            5: 23.7, 6: 23.2, 7: 24.2, 8: 25, 9: 25.8,
            10: 26.9, 11: 28.1, 12: 29.9, 13: 31.3, 14: 31.7,
            15: 32.8, 16: 32.9, 17: 32.5, 18: 31.7, 19: 30.5,
            20: 28.4, 21: 25.7, 22: 25, 23: 24.3
        };
        const result = weatherCalculator.scanTemperature(input);
        const expectedResponse = true;
        expect(result).toEqual(expectedResponse);
    });
    it('should return correct weather report for the current hour', () => {
        const input = {
            0: 24, 1: 23.8, 2: 23.5, 3: 23.9, 4: 23.7,
            5: 23.7, 6: 23.2, 7: 24.2, 8: 24, 9: 23.8,
            10: 23.9, 11: 23.1, 12: 22.9, 13: 21.3, 14: 21.7,
            15: 22.8, 16: 22.9, 17: 12.5, 18: 11.7, 19: 10.5,
            20: 22.4, 21: 22.7, 22: 22, 23: 24.3
        };
        const result = weatherCalculator.scanTemperature(input);
        const expectedResponse = false;
        expect(result).toEqual(expectedResponse);
    });
});
describe('rocessNextDayWeather', () => {
    it('should return correct weather report for the current hour', () => {
        const input = {
            0: 24, 1: 23.8, 2: 23.5, 3: 23.9, 4: 23.7,
            5: 23.7, 6: 23.2, 7: 24.2, 8: 25, 9: 25.8,
            10: 26.9, 11: 28.1, 12: 29.9, 13: 31.3, 14: 31.7,
            15: 32.8, 16: 32.9, 17: 32.5, 18: 31.7, 19: 30.5,
            20: 28.4, 21: 25.7, 22: 25, 23: 24.3
        };
        const result = weatherCalculator.scanTemperature(input);
        const expectedResponse = true;
        expect(result).toEqual(expectedResponse);
    });
    it('should return correct weather report for the current hour', () => {
        const input = {
            0: 24, 1: 23.8, 2: 23.5, 3: 23.9, 4: 23.7,
            5: 23.7, 6: 23.2, 7: 24.2, 8: 24, 9: 23.8,
            10: 23.9, 11: 23.1, 12: 22.9, 13: 21.3, 14: 21.7,
            15: 22.8, 16: 22.9, 17: 12.5, 18: 11.7, 19: 10.5,
            20: 22.4, 21: 22.7, 22: 22, 23: 24.3
        };
        const result = weatherCalculator.scanTemperature(input);
        const expectedResponse = false;
        expect(result).toEqual(expectedResponse);
    });
});
//# sourceMappingURL=weatherCalculator.test.js.map