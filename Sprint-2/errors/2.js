
// Predict and explain first...
//1-wrong function declaration,
//2-no function call

// this function should square any number but instead we're going to get an error

function square(num) {
    return num * num;
}

console.log(square(3))
console.log(square(5))
console.log(square(8))
//add function call