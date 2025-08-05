const fs = require('fs');

function getNewCount() {
  const START_COUNT = 1000;
  const START_DATE = new Date('2025-08-01T00:00:00Z');
  const HOURS_SINCE = Math.floor((Date.now() - START_DATE.getTime()) / (1000 * 60 * 60));

  // Random upward drift
  let count = START_COUNT;
  for (let i = 0; i < HOURS_SINCE; i++) {
    count += Math.floor(Math.random() * 5) - 2; // –2 to +2
  }

  // Minimum floor
  if (count < START_COUNT) count = START_COUNT;

  return count;
}

const count = getNewCount();
fs.writeFileSync('count.json', JSON.stringify({ count }, null, 2));
console.log("Updated count to:", count);
