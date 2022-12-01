const fs = require('fs');

const allFileContents = fs.readFileSync('test.txt', 'utf-8');



console.log(allFileContents);