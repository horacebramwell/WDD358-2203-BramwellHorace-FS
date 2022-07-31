const farToCelcius = require('./temp');

test('converts 59F to 15C', () => {
  expect(farToCelcius(59)).toBe(15);
});
