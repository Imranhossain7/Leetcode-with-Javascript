/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function (celsius) {
  let kelvin = celsius + 273.15;

  let Fahrenheit = celsius * 1.8 + 32.0;

  let arr = [];

  arr.push(kelvin, Fahrenheit);

  return arr;
};
