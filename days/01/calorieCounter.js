const findMax = (listOfCalories) => {
  let max = listOfCalories[0];

  for (let i = 0; i < listOfCalories.length; i += 1) {
    if (listOfCalories[i] > max) {
      max = listOfCalories[i];
    }
  }

  return max;
};

const getSum = (elf) => elf.reduce((acc, val) => acc + val, 0);

const findMaxThree = (array) => getSum(array.sort((a, b) => a - b).slice(-3));

const parseListOfCalories = (input) => {
  const result = input
    .trim()
    .split('\n\n')
    .map((elf) => elf.split('\n').map((cal) => parseInt(cal, 10)))
    .map(getSum);

  return result;
};

module.exports = {
  findMax, parseListOfCalories, findMaxThree,
};
