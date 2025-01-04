/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/
function isValidPassword(password, previousPasswords= []) {
    // Check length
    if (password.length < 5) {
      return false;
    }
  
    // Check for uppercase, lowercase, number, and symbol
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!#$%&.\*]/.test(password);
  
    if (!hasUppercase || !hasLowercase || !hasNumber || !hasSymbol) {
      return false;
    }
  
    // Check for uniqueness
    if (previousPasswords.includes(password)) {
      return false;
    }
  
    return true;
  }


  test("password has less than 5 characters", () => {
    expect(isValidPassword("aaaa")).toEqual(false);
  });
  test("password without an uppercase letter", () => {
    expect(isValidPassword("abcdef")).toEqual(false);
  });
  test("password without a lowercase letter", () => {
    expect(isValidPassword("ABCDEF")).toEqual(false);
  });
  test("password without a number", () => {
    expect(isValidPassword("abcdef")).toEqual(false);
  });
  test("passwords without a non-alphanumeric symbol", () => {
    expect(isValidPassword("abcdef")).toEqual(false);
  });
  test("password that have been used before", () => {
    expect(isValidPassword("abcdef", ["abcdeA1!"])).toEqual(false);
  });
  test("valid passwords", () => {
    expect(isValidPassword("abcdeA2!")).toEqual(true);
  });