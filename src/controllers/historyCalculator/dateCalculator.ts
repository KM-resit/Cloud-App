export function determineDates(data: Date) {
    const endDate = new Date(data);

    endDate.setMonth(endDate.getMonth() - 1);

    if (endDate.getMonth() === 2) {
        if (determineLeapYear(endDate.getFullYear())) {
            endDate.setDate(29);
        } else {
            endDate.setDate(28);
        }
    } else {
        if (determineMonth(endDate.getMonth())) {
            endDate.setDate(31);
        } else {
            endDate.setDate(30);
        }
    }

    const startDate = new Date(data);
    startDate.setFullYear(startDate.getFullYear() - 2); // tempary set to 2 years
    startDate.setDate(1);

    const result = {
        endDate: endDate.toISOString().split('T')[0],
        startDate: startDate.toISOString().split('T')[0]
    }
   
    return result
}

// For determining which days does a month has
export function determineMonth(month: number): boolean {
    const isMonthTrue = [
        true, false, true, // Jan, Feb,  Mar
        false, true, false,  // Apr, May, Jun
        true, true, false,  // Jul, Aug, Sep
        true, false, true,   // Oct, Nov, Dec
    ];
  
    if (month >= 0 && month <= 11) {
        return isMonthTrue[month];
    } else {
        return false;
    }
}
  
  // Determine if it is a leap year or not
export function determineLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};