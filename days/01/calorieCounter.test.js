const {
  findMax, findMaxThree, parseListOfCalories,
} = require('./calorieCounter');

describe('findMax', () => {
  it('should find the highest calorie count in an array', () => {
    expect(findMax([1000, 2000, 24000, 0, 1000, 18000])).toEqual(24000);
  });
});

describe('findMaxThree', () => {
  it('should find top 3 calorie counts in an array', () => {
    expect(findMaxThree([1000, 7000, 24000, 0, 1000, 18000])).toEqual([7000, 18000, 24000]);
  });
});

describe('parseListOfCalories', () => {
  it('should convert input into array or numbers', () => {
    expect(parseListOfCalories('1000\n\n2000')).toEqual([1000, 2000]);
  });

  it('it should sum the values between the new lines', () => {
    expect(parseListOfCalories('1000\n\n2000\n1000')).toEqual([1000, 3000]);
  });
});
