const fs = require('fs')

fs.writeFile('mynewfile3.txt', 'Hello replacement content!', (err) => {
  if (err) throw err
  console.log('Saved!')
})
