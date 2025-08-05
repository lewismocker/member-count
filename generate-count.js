const fs = require('fs');

const data = {
  count: Math.floor(Math.random() * 10000)  // Totally random large number
};

fs.writeFileSync('count.json', JSON.stringify(data, null, 2));
console.log('Forced random count:', data.count);
