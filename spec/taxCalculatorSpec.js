const taxCalculator = require('../taxCalculator');

describe('taxCalculator', () => {
  it('calculates tax for a salary below the threshold', () => {
    expect(taxCalculator.calculateTax(50000)).toBe(2500);
  });

  it('calculates tax for a salary above the threshold', () => {
    expect(taxCalculator.calculateTax(100000)).toBe(15000);
  });

  it('returns zero for zero income', () => {
    expect(taxCalculator.calculateTax(0)).toBe(0);
  });
});
