// In this week's prep, we started implementing getOrdinalNumber
function getOrdinalNumber(digits) {

    if (digits === 11 || digits === 12 || digits === 13) {
        return `${digits}th`;
    }
    const lastDigit = digits % 10;
    if (lastDigit === 1) {
      return `${digits}st`;
    }
    if (lastDigit === 2) {
      return `${digits}nd`;
    }
    if (lastDigit === 3) {
      return `${digits}rd`;
    }

    return `${digits}th`;
  }
// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback
console.log(getOrdinalNumber(11))
console.log(getOrdinalNumber(12))
console.log(getOrdinalNumber(13))
console.log(getOrdinalNumber(1))
console.log(getOrdinalNumber(2))
console.log(getOrdinalNumber(3))
console.log(getOrdinalNumber(4))

test('if the last digit is 1', () => {
    expect(getOrdinalNumber(1)).toEqual('1st') 
    expect(getOrdinalNumber(11)).toEqual('11th') 
    expect(getOrdinalNumber(21)).toEqual('21st') })

test('if the last digit is 2', () => {
    expect(getOrdinalNumber(2)).toEqual('2nd') 
    expect(getOrdinalNumber(12)).toEqual('12th') 
    expect(getOrdinalNumber(22)).toEqual('22nd') })

test('if the last digit is 1', () => {
    expect(getOrdinalNumber(3)).toEqual('3rd') 
    expect(getOrdinalNumber(13)).toEqual('13th') 
    expect(getOrdinalNumber(23)).toEqual('23rd') })

