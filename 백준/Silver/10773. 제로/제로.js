const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function sum() {
  let stack = [];
  let result = 0;
  for (let i = 1; i < input.length; i++) {
    if (input[i] !== "0") {
      stack.push(Number(input[i]));
    } else {
      stack.pop();
    }
  }
  for (let i of stack) {
    result += i;
  }
  return result;
}
console.log(sum());
