const fs = require('fs');

const newCount = Math.floor(1000 + Math.random() * 1000);

const data = {
  count: newCount,
  updatedAt: new Date().toISOString()
};

fs.writeFileSync('count.json', JSON.stringify(data, null, 2));
console.log("✅ count.json updated:", data);
