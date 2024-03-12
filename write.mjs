import fs from 'node:fs';
import readline from 'node:readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  console.log(`writed ${line}`)
  
  rl.close()
})





const point = process.argv[2];

fs.writeFileSync('./point.txt', point)

const data = fs.readFileSync('./point.txt', 'utf8')
console.log(point);
