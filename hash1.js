// What if I ask you the following question — Give me an input string that outputs a SHA-256 hash that starts with 00000 . How will you do it?
// A: You will have to brute force until you find a value that starts with 00000
const crypto = require('crypto')

function findInputWithPrefix(prefix){
  let input = 0;
  while(true){
    let inputStr = input.toString();
    const hash = crypto.createHash('sha256').update(inputStr).digest('hex');
    if(hash.startsWith(prefix)){
      return {input : input, hash : hash};
    }
    input++;
  }
}

const result = findInputWithPrefix('000000');
console.log(`Input : ${result.input}`);
console.log(`Hash : ${result.hash}`);
