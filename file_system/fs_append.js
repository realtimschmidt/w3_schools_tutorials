const fs = require('fs');

fs.appendFile('mynewfile1.txt', '\nMy appended text.', (err) => {
  if (err) throw err;
  console.log('Saved!');
})
