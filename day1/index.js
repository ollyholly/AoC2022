const fs = require('fs');
const { parseListOfCalories, findMaxThree } = require('./calorieCounter');

const allFileContents = fs.readFileSync('problem.txt', 'utf-8');

const array = parseListOfCalories(allFileContents);

const maxCalories = findMaxThree(array).reduce((acc, i) => acc + i, 0);

console.log(maxCalories);
