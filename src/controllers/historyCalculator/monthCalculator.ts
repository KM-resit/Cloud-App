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

    const result = {};
    for (const year in byYearAndMonth){
        const averageTemperature = calculateTempurature(byYearAndMonth);
        //result.push({ year: parseInt(year), averageTemperature});
    }

    console.log(byYearAndMonth);
    console.log(result);
}

export function calculateTempurature(data: any){
    console.log(data);

}