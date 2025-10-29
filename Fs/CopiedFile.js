const fs = require('fs');

const source = 'source.txt';
const destination = 'destination.txt';

if (fs.existsSync(source)) {
  fs.copyFileSync(source, destination);
  console.log(`File copied successfully from ${source} to ${destination}`);
} else {
  console.log(`Source file "${source}" does not exist.`);
}
