let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

let arr = input[1].split(" ").map((el) => Number(el));
let cnt = 0;

function isPrime(num) {
  if (num === 1) {
    return false;
  }
  if (num === 2) {
    return true;
  } else if (num % 2 !== 0) {
    let sqrt = parseInt(Math.sqrt(num));
    for (let j = 3; j <= sqrt; j += 2) {
      if (num % j === 0) {
        return false;
      }
    }
    return true;
  }
}

function primeNubmer(arr) {
  for (let i of arr) {
    if (isPrime(i)) {
      cnt++;
    }
  }
  return cnt;
}

console.log(primeNubmer(arr));