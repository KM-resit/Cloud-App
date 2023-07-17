/**
 * processNextDayWeather - this function will allow all scannable types to be scanned.
 * @param data in JSON-format hourly report of weather conditions.
 * @returns JSON-format with determined weather conditions.
 */
export function processNextDayWeather(data: any) {
   let result;
   let temperatureResult;

   if(data !== null) {
      temperatureResult = scanTemperature(data.temperature_2m); //scan if temperature exceeds set perameter.
   }

   if(temperatureResult == true){
      result = { //set return value, 
         result: true, //set as confirmed return
         type: 'Temperature' //type of reported weather condition 
      }
   } else {
      result = {
         result: false, //set as no confirmed weather conditions
      }
   }

   return result;
};

/**
 * scanTemperature - This function will scan alle temperatures.
 * @param data JSON-format containing list with hourly temperatures.
 * @returns JSON-format with determined weather conditions.
 */
export function scanTemperature(data: any) {        

   for (const item in data) { //go through temperatures.     
      if (data.hasOwnProperty(item)) {
         const temperature = data[item];
         if(temperature >= 25) { // Return true immediately if any temperature is greater than 25
            return true; 
         }
      }
   }

   return false; // Return false if no temperature is greater than 25.
};