const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2);

const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 3. substring() : cuts a part of the whole string. in this line we remove "p" from penceString.
// 5. padStart() : add character to a string. in this line we check the string length is three,if not we add "0" to the start 
// 6. accounts the number of pounds which is 3
// 8. accounts the number of pounds which is 99. in this line we check the string length is two,if not we add "0" to the start
// 10. 3.99