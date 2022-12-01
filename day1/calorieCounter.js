const findMax = (listOfCalories) => {
  let max = listOfCalories[0];

  for (let i = 0; i < listOfCalories.length; i += 1) {
    if (listOfCalories[i] > max) {
      max = listOfCalories[i];
    }
  }

  return max;
};

const findMaxThree = (array) => array.sort((a, b) => a - b).slice(-3);

const parseListOfCalories = (string) => {
  let sum = 0;
  const newArray = [];
  const array = string.split('\n');

  array.forEach((i) => {
    if (i === '') {
      newArray.push(sum);
      sum = 0;
    }

    sum += Number(i);
  });

  return newArray;
};

module.exports = { findMax, parseListOfCalories, findMaxThree };
