interface monthlyAverage {
    [year: number]: {
        temperature: { [month: number]: number };
        precipitation: { [month: number]: number };
      };
}

export function calculatePerMonth(data: any) {
    // Create an object to store temperature values grouped by month
    const byYearAndMonth: { [year: number]: { [month: number]: { temperature: number[]; precipitation: number[] } } } = {};  
    // Iterate through the 'time' array and corresponding 'temperature_2m_mean' array
    for (let i = 0; i < data.time.length; i++) {
        const date = new Date(data.time[i]);
        const year = date.getFullYear();
        const month = date.getMonth(); // Get the month (0 - January, 1 - February, ..., 11 - December)
        const temperature = data.temperature_2m_mean[i];
        const precipitation = data.precipitation_sum[i];

        if (!byYearAndMonth[year]) {
            byYearAndMonth[year] = {};
        }
      
        if (!byYearAndMonth[year][month]) {
            byYearAndMonth[year][month] = { temperature: [temperature], precipitation: [precipitation] };
          } else {
            byYearAndMonth[year][month].temperature.push(temperature);
            byYearAndMonth[year][month].precipitation.push(precipitation);
        }
    }

    const result : monthlyAverage = {};
    for (const year in byYearAndMonth){
        const averageTemperature = calculateTempurature(byYearAndMonth[year]);
        const averagePrecipitation = calculatePrecipitation(byYearAndMonth[year]);
        result[parseInt(year)] = {
            temperature: averageTemperature,
            precipitation: averagePrecipitation,
          };
    }

    console.log(result);


    return result;
}

export function calculateTempurature(data: any): { [month: number]: number } {
    const averages: { [month: number]: number } = {};
  
    for (const month in data) {
      const temperatures = data[month].temperature;
      const sum = temperatures.reduce((acc: number, temp: number) => acc + temp, 0);
      const average = sum / temperatures.length;
      const averageOneDecimal = parseFloat(average.toFixed(1));
      averages[parseInt(month)] = averageOneDecimal;
    }
  
    return averages;
  }
  
  export function calculatePrecipitation(data: any): { [month: number]: number } {
    const averages: { [month: number]: number } = {};
  
    for (const month in data) {
      const precipitations = data[month].precipitation;
      const sum = precipitations.reduce((acc: number, temp: number) => acc + temp, 0);
      const average = sum / precipitations.length;
      const averageOneDecimal = parseFloat(average.toFixed(1));
      averages[parseInt(month)] = averageOneDecimal;
    }
  
    return averages;
  }