// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  if (hours == 00) {
    return `12:00 am`;
  }
  if (hours == 12) {
    return `12:00 pm`;
  }
  if (hours > 12) {
    return `${hours - 12}:00 pm`;
  }
  return `${time} am`;
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);
console.log(formatAs12HourClock("08:00"))
console.log(formatAs12HourClock("23:00"))
console.log("Edge Cases : ")
console.log("MIDNIGHT : " + formatAs12HourClock("00:00"))
console.log("MIDDAY : " +formatAs12HourClock("12:00"))