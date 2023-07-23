# Cloud-App

The Weather API is a tool for retrieving and analyzing weather data for various locations. It allows users to fetch weather data for a specific city, providing detailed insights into temperature and precipitation trends over a given period. The API serves as a valuable resource users who require historical and forecast weather data to study plan according to climate patterns or weather forecasts.

## Table of Contents

- [Cloud Weather app](#project-name)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
    - [Usage](#usage)
  - [API Documentation](#api-documentation)
  - [Testing](#testing)

## About

The API contains the following features to allow the weather application to work:
 - Retrieve daily historical weather data for any city or location.
 - Retrieve monthly historical weather data for any city or location.
 - Retrieve weather forecast data for any city or location from 1 to 16 days.
 - Retrieve a warning depending on temperature of frost the next day.
 - Retrieve a warning depending on extreme weather conditions wihtin the next 2 hours.

## Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/KM-resit/Cloud-App.git

# Change directory
cd your-repo

# Install dependencies
npm install
```

### Usage

In order to use the API, make sure that the installation of has been completed.
Use the following command to start the API enviroment.
```bash
# Run the application
npm start
```

## API Documentation

### /currentWeather Endpoint

- **Description:** This endpoint provides a result based on the weather data for a specific location based on latitude and longitude coordinates. Will report on extreme weather conditions.

- **URL:** `www.<website>.com/currentWeather`

- **HTTP Method:** GET

- **Parameters:**
  - `latitude` (required): The latitude coordinate of the location.
  - `longitude` (required): The longitude coordinate of the location.

- **Example Request:**
  ```
  GET www.<website>.com/currentWeather?latitude=40.7128&longitude=-74.0060
  ```

- **Example Response:**
  ```json
  {
     "report": "Heavy snowfall",
     "timezone": "GMT",
     "time": "11:00"
  }
  ```

### /nextDayWeather Endpoint

- **Description:** This endpoint provides a result based on the weather forecast data for the next day for a specific location based on latitude and longitude coordinates. Will report on high temperatures and soilforst.

- **URL:** `www.<website>.com/nextDayWeather`

- **HTTP Method:** GET

- **Parameters:**
  - `latitude` (required): The latitude coordinate of the location.
  - `longitude` (required): The longitude coordinate of the location.

- **Example Request:**
  ```
  GET www.<website>.com/nextDayWeather?latitude=40.7128&longitude=-74.0060
  ```

- **Example Response:**
  ```json
  {  
     "result": true,
     "type": "Temperature" 
  }
  ```

### /weatherHistory Endpoint

- **Description:** This endpoint provides historical weather data for a specific city. The data is formatted in a daily basis.

- **URL:** `www.<website>.com/weatherHistory`

- **HTTP Method:** GET

- **Parameters:**
  - `city` (required): The name of the city.

- **Example Request:**
  ```
  GET www.<website>.com/weatherHistory?city=London
  ```

- **Example Response:**
  ```json
  {
    "city": "London",
    "history": [
     {
        "latitude": 52.40001,
        "longitude": 4.900009,
        "generationtime_ms": 0.6959438323974609,
        "utc_offset_seconds": 0,
        "timezone": "GMT",
        "timezone_abbreviation": "GMT",
        "elevation": 14,
        "daily_units": {
          "time": "iso8601",
          "temperature_2m_mean": "°C",
          "precipitation_sum": "mm"
        },
        "daily": {
          "time": [
            "2022-07-01", "2022-07-02", "2022-07-03", "2022-07-04", ... more items
          ],
          "temperature_2m_mean": [
            16.2, 17.6, 16.8, 16.8, ... more items
          ],
          "precipitation_sum": [
            1.7, 0.1, 1.2, 0.5, ... more items
          ]
        }
     }
  }
  ```

### /weatherHistoryPerMonth Endpoint

- **Description:** This endpoint provides historical weather data for a specific city aggregated by month.

- **URL:** `www.<website>.com/weatherHistoryPerMonth`

- **HTTP Method:** GET

- **Parameters:**
  - `city` (required): The name of the city.

- **Example Request:**
  ```
  GET www.<website>.com/weatherHistoryPerMonth?city=Paris
  ```

- **Example Response:**
  ```json
  {
     "2022": {
        "temperature": { "6": 18.4, "7": 20, "8": 15.4, "9": 13.8, "10": 9, "11": 4.1 },
        "precipitation": { "6": 0.8, "7": 1.4, "8": 2.6, "9": 1.7, "10": 3.3, "11": 2.4 }
     }, 
     "2023": {
        "temperature": { "0": 5.8, "1": 5.8, "2": 6.5, "3": 8.3, "4": 12.6, "5": 18.4 },
        "precipitation": { "0": 3.1, "1": 0.6, "2": 4, "3": 2.6, "4": 1.7, "5": 0.9 }
     }
  }
  ```

### /weatherForecast Endpoint

- **Description:** This endpoint provides a weather forecast for a specific city for the next 'days' number of days.

- **URL:** `www.<website>.com/weatherForecast`

- **HTTP Method:** GET

- **Parameters:**
  - `city` (required): The name of the city.
  - `days` (required): The number of days for the forecast.

- **Example Request:**
  ```
  GET www.<website>.com/weatherForecast?city=Berlin&days=5
  ```

- **Example Response:**
  ```json
  {
    
  }
  ```

Replace `<website>` with the actual domain or server where your API is hosted.

## Testing

For a general test, use the following code:
```bash
# Run tests
npm test
```

In order to create a test coverage, use the following code:
```bash
# Run tests
npx jest --coverage
```
