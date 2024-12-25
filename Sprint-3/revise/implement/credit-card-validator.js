//isValidNumber checks wether the credit card number is valid or not.
//cardNumber refers to the credit card number


function isValidNumber(cardNumber) {
    // 1. Check if the cardNumber is a 16-digit string
    if (cardNumber.length !== 16) {
      return false; 
    }
  
    // 2. Check if all characters are digits
    /*

    !      :  not
    /    / :  creating a regular expression pattern in between (to check the type of cardNumber characters).
    ^      :  Matches the beginning of the string.
    \d     :  Matches decimal digit range [0-9].
    {16}   :  16 character
    $      :  Matches the end of the string.

    */
    if (!/^\d{16}$/.test(cardNumber)) { 
      return false; 
    }
  
    // 3. Check for at least two different digits
    /*
    new: creates a new Set object.  
    set: an object has a collection of unique values. So, if the input string has duplicate digits, the Set will only store one instance of each digit.  
    if the card number has the same digit for 16 times this will be invalid credit card number.
    */
    const uniqueDigits = new Set(cardNumber); 
    if (uniqueDigits.size === 1) { 
      return false; 
    }
  
    // 4. Check if the last digit is even   
    // Number: gets the numerical value of a string  
    if (Number(cardNumber[15]) % 2 !== 0) { 
      return false; 
    }
  
    // 5. Check if the sum of digits is greater than 16
    //split: splits a string into an array of its individual characters
    const digits = cardNumber.split('');
    let sum = 0;
    
    for (const digit of digits) {
      sum += Number(digit);
    }
    
    if (sum <= 16) {
      return false;
    }
  
     return true;
 }
  
  const cardNumber1 = "1234567890123456"; // Valid
  const cardNumber2 = "1111111111111111"; // Invalid (all digits are the same)
  const cardNumber3 = "1234567890123457"; // Invalid (last digit is odd)
  const cardNumber4 = "123456789012345";  // Invalid (not 16 digits)
  const cardNumber5 = "123456789012345a"; // Invalid (contains non-digit character)
  const cardNumber6 = "0000000000000001"; // Invalid (sum < 16 )


  console.log(isValidNumber(cardNumber1)); // Output: true
  console.log(isValidNumber(cardNumber2)); // Output: false
  console.log(isValidNumber(cardNumber3)); // Output: false
  console.log(isValidNumber(cardNumber4)); // Output: false
  console.log(isValidNumber(cardNumber5)); // Output: false
  console.log(isValidNumber(cardNumber6)); // Output: false

