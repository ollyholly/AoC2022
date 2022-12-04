const { getInput } = require('../../common/input');
const {
  parseListOfCalories, findMaxThree, findMax,
} = require('./calorieCounter');

const input = getInput('../days/01/problem.txt');

const array = parseListOfCalories(input);

const maxThreeCalories = findMaxThree(array);
const maxCalories = findMax(array);

console.log('Max', maxCalories);
console.log('Max three', maxThreeCalories);
