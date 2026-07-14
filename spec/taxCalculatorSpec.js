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

  it('calculates tax correctly for $25000', () => {
    expect(taxCalculator.calculateTax(25000)).toBe(1250);
  });

  it('calculates tax correctly for $75000', () => {
    expect(taxCalculator.calculateTax(75000)).toBe(11250);
  });

  it('calculates tax correctly for $150000', () => {
    expect(taxCalculator.calculateTax(150000)).toBe(22500);
  });

  it('handles negative income by returning zero', () => {
    expect(taxCalculator.calculateTax(-5000)).toBe(0);
  });
});
