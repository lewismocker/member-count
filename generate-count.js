const fs = require('fs');

const data = {
  count: Math.floor(1000 + Math.random() * 1000) // Will be between 1000–2000
};

fs.writeFileSync('count.json', JSON.stringify(data, null, 2));
console.log('Forced new count:', data.count);
