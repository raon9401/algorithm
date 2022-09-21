const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [N, ...arr] = input;
for (let i = 0; i < input.length - 1; i++) {
  arr[i] = Number(input[i + 1]);
}
arr.sort((a, b) => a - b);
console.log(arr.reduce((acc, el) => acc + `${el}\n`, ""));