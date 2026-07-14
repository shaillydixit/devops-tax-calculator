const express = require('express');
const path = require('path');
const { calculateTax } = require('./taxCalculator');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/calculate', (req, res) => {
  const salary = Number(req.body.salary || 0);
  const tax = calculateTax(salary);
  res.json({ salary, tax });
});

app.listen(port, () => {
  console.log(`Tax calculator app listening on port ${port}`);
});
