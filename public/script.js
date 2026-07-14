function calculateTax() {
  const form = document.getElementById('tax-form');
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
      document.getElementById('result').textContent = `Estimated tax: $${data.tax.toFixed(2)}`;
    })
    .catch(err => console.error(err));
}

document.getElementById('tax-form').addEventListener('submit', e => {
  e.preventDefault();
  calculateTax();
});
