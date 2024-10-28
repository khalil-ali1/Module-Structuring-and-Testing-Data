const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

console.log("num value is :" , num)
/*
Math.random():returns a random number between n = [ 0 , 1 [ .
Math.floor() :returns the previous real number of a decimal number .
num = Math.floor (n*(100 - 1 + 1) + 1 ;
num = Math.floor (n*100 + 1)
num = Math.floor (100n + 1)

num range between : [ 1 , 100 ]  
num range between : [ minimum , maximum ]

*/