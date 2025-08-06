const fs = require('fs');

// === CONFIGURATION ===
const COUNT_FILE = 'count.json';
const MIN_CHANGE = -2;
const MAX_CHANGE = 2;
const TREND_BIAS = 0.2; // ~50–60 growth per month

// === Load current count ===
let currentCount = 1000;

try {
  const saved = JSON.parse(fs.readFileSync(COUNT_FILE));
  currentCount = typeof saved.count === 'number' ? saved.count : 1000;
} catch (err) {
  console.log('No count.json found. Starting fresh at 1000.');
}

// === Calculate next count ===
const randomChange = Math.floor(Math.random() * (MAX_CHANGE - MIN_CHANGE + 1)) + MIN_CHANGE;
const shouldTrendUp = Math.random() < TREND_BIAS;

// If trending up, force change to be positive
const finalChange = shouldTrendUp ? Math.abs(randomChange) : randomChange;
let nextCount = currentCount + finalChange;

if (nextCount < 0) nextCount = 0;

console.log(`Previous: ${currentCount} → Change: ${finalChange} → New: ${nextCount}`);

// === Write to count.json ===
const output = {
  count: nextCount,
  updatedAt: new Date().toISOString()
};

fs.writeFileSync(COUNT_FILE, JSON.stringify(output, null, 2));
console.log('✅ count.json updated:', output);
