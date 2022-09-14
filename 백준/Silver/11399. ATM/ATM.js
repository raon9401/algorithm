const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function atm() {
  let result = [];
  let sum = 0;
  let arr = input[1]
    .split(" ")
    .map((el) => Number(el))
    .sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    result.push(sum);
  }
  return result.reduce((acc, cur) => {
    return (acc += cur);
  }, 0);
}

console.log(atm());