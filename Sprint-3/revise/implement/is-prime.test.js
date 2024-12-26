// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime


function isPrime(num) {
//A prime number is a whole number greater than 1 that has only two divisors: 1 and itself.
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  test('This is a prime number', () => {
  expect(isPrime(2)).toEqual(true)
  expect(isPrime(3)).toEqual(true)
  expect(isPrime(5)).toEqual(true)
})
test('This is not prime number', () => {
    expect(isPrime(4)).toEqual(false)
    expect(isPrime(6)).toEqual(false)
    expect(isPrime(8)).toEqual(false)
  })