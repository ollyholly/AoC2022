const { getInput } = require('./input');

describe('getInputFromFile', () => {
  it('should return array of int for each line', () => {
    const result = getInput('test.txt');

    expect(result).toEqual('1000\n3000\n\n4000');
  });
});
