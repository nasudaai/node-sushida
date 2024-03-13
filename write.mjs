import fs from 'node:fs';
import readline from 'node:readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let data;
rl.on('line', (line) => {
  data = line;

  console.log(`writed ${line}`)

  fs.writeFileSync('./data.txt', data)
  
  const fileData = fs.readFileSync('./data.txt', 'utf8')
  console.log(fileData);                                
  
  rl.close()
})





const point = process.argv[2];





