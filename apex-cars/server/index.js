const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const DB_DIR = path.resolve(__dirname, 'db');
if (!fs.existsSync(DB_DIR)) fs.mkdirSync(DB_DIR, { recursive: true });

const read = (file, fallback) => {
  const p = path.join(DB_DIR, file);
  if (!fs.existsSync(p)) {
    fs.writeFileSync(p, JSON.stringify(fallback || [] , null, 2));
    return fallback || [];
  }
  return JSON.parse(fs.readFileSync(p, 'utf8'));
};

const write = (file, data) => {
  const p = path.join(DB_DIR, file);
  fs.writeFileSync(p, JSON.stringify(data, null, 2));
};

app.get('/api/cars', (req, res) => {
  const cars = read('cars.json', []);
  res.json(cars);
});

app.get('/api/cars/:id', (req, res) => {
  const cars = read('cars.json', []);
  const car = cars.find(c => String(c.id) === String(req.params.id));
  if (!car) return res.status(404).json({ error: 'Not found' });
  res.json(car);
});

app.get('/api/bookings', (req, res) => {
  const bookings = read('bookings.json', []);
  res.json(bookings);
});

app.post('/api/bookings', (req, res) => {
  const bookings = read('bookings.json', []);
  const id = Date.now();
  const record = { id, ...req.body };
  bookings.push(record);
  write('bookings.json', bookings);
  res.json({ success: true, id });
});

app.post('/api/finance', (req, res) => {
  const finances = read('finances.json', []);
  const id = Date.now();
  const record = { id, ...req.body };
  finances.push(record);
  write('finances.json', finances);
  res.json({ success: true, id });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API server running on http://localhost:${PORT}`));
