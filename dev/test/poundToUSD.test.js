const poundToUSD = require('./poundToUSD');

test('converts 1 pound to 1.33 USD', () => {
  expect(poundToUSD(1)).toBe(1.33);
});
