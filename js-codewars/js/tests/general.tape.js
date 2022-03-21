const test = require('tape');
const snail = require('../challenges/snail_shell.js');

const expectedOutput = [1, 2, 3, 6, 9, 8, 7, 4, 5];

test('Some test', function (t) {
  t.plan(1);
  const output = snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
  t.deepEqual(output, expectedOutput);
});
