interface monthlyAverage {
    [year: number]: any;
  }

export function calculatePerMonth(data: any) {
    // Create an object to store temperature values grouped by month
    const byYearAndMonth: { [year: number]: { [month: number]: number[] } } = {};
  
    // Iterate through the 'time' array and corresponding 'temperature_2m_mean' array
    for (let i = 0; i < data.time.length; i++) {
        const date = new Date(data.time[i]);
        const year = date.getFullYear();
        const month = date.getMonth(); // Get the month (0 - January, 1 - February, ..., 11 - December)
        const temperature = data.temperature_2m_mean[i];

        if (!byYearAndMonth[year]) {
            byYearAndMonth[year] = {};
        }
      
        if (!byYearAndMonth[year][month]) {
            byYearAndMonth[year][month] = [temperature];
        } else {
            byYearAndMonth[year][month].push(temperature);
        }
        
    }

    const result : monthlyAverage = {};
    for (const year in byYearAndMonth){
       const averageTemperature = calculateTempurature(byYearAndMonth[year]);
       result[parseInt(year)] = averageTemperature;
    }

    return result;
}

export function calculateTempurature(data: any) : monthlyAverage {
    const averages: monthlyAverage = {};    
    // console.log('entry begin');
    // console.log(data);
    // console.log('entry end');

    for(const month in data) {
        const temperatures = data[month];
        const sum = temperatures.reduce((acc: number, temp: number) => acc + temp, 0);
        const average = sum / temperatures.length;    
        const averageOneDecimal = parseFloat(average.toFixed(1)); // Limit average to one decimal place
        averages[parseInt(month)] = averageOneDecimal;
    }

    return averages;

}