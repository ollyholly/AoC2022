const { findMax, findMaxThree, parseListOfCalories } = require('./calorieCounter');

test('finds the highest calorie count in an array', () => {
  expect(findMax([1000, 2000, 24000, 0, 1000, 18000])).toEqual(24000);
});

test('finds top 3 calorie counts in an array', () => {
  expect(findMaxThree([1000, 7000, 24000, 0, 1000, 18000])).toEqual([7000, 18000, 24000]);
});

test('split sting into array of numbers', () => {
  expect(parseListOfCalories('1000\n\n2000\n')).toEqual([1000, 2000]);
});

test('sums the values between the new lines', () => {
  expect(parseListOfCalories('1000\n\n2000\n1000\n')).toEqual([1000, 3000]);
});
