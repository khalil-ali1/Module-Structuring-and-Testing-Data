const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;  
const totalMinutes = (movieLength - remainingSeconds) / 60; 

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// b) How many function calls are there?

// c) Using documentation, explain what the expression movieLength % 60 represents

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

// a) 6 times
// b) 1 time
// c) the reminder after applying division (movieLength / 60) which equals to 24
// d) number of minutes in movieLength
// e) movieDuration
// f) yes it will work for all real positive values of movieLength