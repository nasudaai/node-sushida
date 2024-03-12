import { appendFile, createReadStream, createWriteStream } from 'node:fs'

const point = process.argv[2] 
const file = process.argv[3]
console.log(`${point} yen >> ${file}  `)

appendFile(file, point + '\n',(err) => {
  if (err) {
    console.error(err)
  } else {
    const result = createReadStream(file, 'utf8')  
    result.pipe(process.stdout);
    console.log('writed!')    
  }
})
