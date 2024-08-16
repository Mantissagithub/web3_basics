// What if I ask you that the input string should start with 100xdevs ? How would the code change?
const crypto = require('crypto')

function findInputWithPrefix(prefix){
  let input = 0;
  while(true){
    let inputStr = '100xdevs' + input.toString();
    const hash = crypto.createHash('sha256').update(inputStr).digest('hex');
    if(hash.startsWith(prefix)){
      return {input : input, hash : hash};
    }
    input++;
  }
}

const result = findInputWithPrefix('000000');
console.log(`Input : 100xdevs${result.input}`);
console.log(`Hash : ${result.hash}`);
