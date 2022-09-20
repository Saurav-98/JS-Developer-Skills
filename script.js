// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Coding Challenge #1

// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."

// Given an array of Temperatures
// Temperatures are in Number
// To Display a String

// Subtasks

// Loop through the array with index
// store the string with variable interpolation in a temp variable.
// Concat the String value in every loop.

// log the String

const printForecast = function (array) {
  let forecast = '';

  for (let i = 0; i < array.length; i++) {
    forecast += `... ${array[i]}°C in ${i + 1} days `;
  }

  console.log(forecast);
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
