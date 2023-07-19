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
const forecastAxios = require('axios');
const weatherForecast = require('../src/controllers/weatherForecast');
describe('weatherForecast', () => {
    it('should return weather forecast of 9 days', () => __awaiter(void 0, void 0, void 0, function* () {
        const req = {
            query: {
                latitude: 40.710335,
                longitude: -73.99307,
            },
        };
        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis(),
        };
        jest.spyOn(forecastAxios, 'get').mockResolvedValue({
            data: {
                latitude: 52.78,
                longitude: 6.9,
                generationtime_ms: 1.5850067138671875,
                utc_offset_seconds: 7200,
                timezone: 'Europe/Amsterdam',
                timezone_abbreviation: 'CEST',
                elevation: 23,
                daily_units: {
                    time: 'iso8601',
                    temperature_2m_max: '°C',
                    temperature_2m_min: '°C',
                    windspeed_10m_max: 'km/h',
                    winddirection_10m_dominant: '°'
                },
                daily: {
                    time: [
                        '2023-07-19',
                        '2023-07-20',
                        '2023-07-21',
                        '2023-07-22',
                        '2023-07-23',
                        '2023-07-24',
                        '2023-07-25',
                        '2023-07-26',
                        '2023-07-27'
                    ],
                    temperature_2m_max: [
                        19.5, 19.8, 18.6,
                        17.1, 20, 17.3,
                        18.4, 19.7, 17.1
                    ],
                    temperature_2m_min: [
                        14.9, 12.2, 11.6,
                        9.3, 14.2, 13.4,
                        12.1, 10.3, 13.5
                    ],
                    windspeed_10m_max: [
                        14.8, 9.1, 14.4,
                        13.8, 20.7, 22.1,
                        13, 21.4, 32
                    ],
                    winddirection_10m_dominant: [
                        280, 320, 277,
                        221, 202, 254,
                        293, 229, 214
                    ]
                }
            },
        });
        yield weatherForecast.weatherForecast(req, res);
        const expectedResponse = {
            time: [
                '2023-07-19',
                '2023-07-20',
                '2023-07-21',
                '2023-07-22',
                '2023-07-23',
                '2023-07-24',
                '2023-07-25',
                '2023-07-26',
                '2023-07-27'
            ],
            temperature_2m_max: [
                19.5, 19.8, 18.6,
                17.1, 20, 17.3,
                18.4, 19.7, 17.1
            ],
            temperature_2m_min: [
                14.9, 12.2, 11.6,
                9.3, 14.2, 13.4,
                12.1, 10.3, 13.5
            ],
            windspeed_10m_max: [
                14.8, 9.1, 14.4,
                13.8, 20.7, 22.1,
                13, 21.4, 32
            ],
            winddirection_10m_dominant: [
                280, 320, 277,
                221, 202, 254,
                293, 229, 214
            ]
        };
        expect(res.json).toHaveBeenCalledWith(expectedResponse);
        expect(res.status).not.toHaveBeenCalledWith(500);
    }));
});
//# sourceMappingURL=weatherForecast.test.js.map