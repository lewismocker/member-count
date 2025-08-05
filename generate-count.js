const fs = require('fs');

const newCount = Math.floor(1000 + Math.random() * 1000);

fs.writeFileSync('count.json', JSON.stringify({ count: newCount }, null, 2));

console.log("Forced new count:", newCount);
