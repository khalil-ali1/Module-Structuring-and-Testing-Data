// Predict and explain first...
//declare decimalNumber outside the function before using it



// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on
const decimalNumber = 0.5;
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}
console.log(convertToPercentage(decimalNumber));//wrong function call.
