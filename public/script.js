function calculateTax() {
  const salary = Number(document.getElementById('salary').value);

  if (isNaN(salary) || salary < 0) {
    alert('Please enter a valid salary');
    return;
  }

  fetch('/calculate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ salary })
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById('total-income').textContent = `$${data.salary.toFixed(2)}`;
      document.getElementById('tax-due').textContent = `$${data.tax.toFixed(2)}`;
      document.getElementById('result-section').style.display = 'block';
      document.getElementById('result').textContent = `Tax Calculated: $${data.tax.toFixed(2)}`;
    })
    .catch(err => {
      console.error(err);
      alert('Error calculating tax');
    });
}

document.getElementById('tax-form').addEventListener('submit', e => {
  e.preventDefault();
  calculateTax();
});
