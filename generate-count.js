const fs = require('fs');

const START_COUNT = 1000;
const START_DATE = new Date('2025-08-01T00:00:00Z');

function pseudoRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function getCurrentCount() {
  const now = new Date();
  const hoursPassed = Math.floor((now - START_DATE) / 3600000);
  let count = START_COUNT;

  for (let i = 0; i < hoursPassed; i++) {
    const rand = pseudoRandom(i);
    if (rand < 0.1) count -= 2;
    else if (rand < 0.3) count -= 1;
    else if (rand < 0.7) count += 1;
    else count += 2;
  }

  return count;
}

const count = getCurrentCount();
fs.writeFileSync('count.json', JSON.stringify({ count }, null, 2), 'utf-8');
