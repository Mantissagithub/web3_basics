// What if I ask you to find a nonce for the following input - 
// harkirat => Raman | Rs 100
// Ram => Ankit | Rs 10
const crypto = require('crypto')

function findInputWithPrefix(prefix){
  let input = 0;
  while(true){
    let inputStr = `harkirat => Raman | Rs 100
      Ram => Ankit | Rs 10` + input.toString();
    const hash = crypto.createHash('sha256').update(inputStr).digest('hex');
    if(hash.startsWith(prefix)){
      return {input : inputStr, hash : hash};
    }
    input++;
  }
}

const result = findInputWithPrefix('000000');
console.log(`Input : ${result.input}`);
console.log(`Hash : ${result.hash}`);

