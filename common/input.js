const fs = require('fs');
const path = require('path');

const getInput = (filename) => fs.readFileSync(path.join(__dirname, filename), 'utf-8').toString();

module.exports = {
  getInput,
};
