const rand = require('./random.js')

const TRIES = 1000000

for(let i = 0; i < TRIES; i++){
  let xs = rand.randLetters(60)
  if(!(i % 100000)){
    console.log(`run ${i} of ${TRIES}`)
  }
  if(xs.some(x => x === undefined)){
    console.log(`ERROR: run ${i}: undefined value found:`)
    console.log(`${xs}`)
  }
}
