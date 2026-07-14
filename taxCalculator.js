function calculateTax(income) {
  if (income <= 0) {
    return 0;
  }

  if (income <= 50000) {
    return income * 0.05;
  }

  return income * 0.15;
}

module.exports = {
  calculateTax
};
