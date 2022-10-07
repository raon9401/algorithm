const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let N = +input[0];
let load = input[1].split(" ").map((el) => BigInt(el));
let pay = input[2].split(" ").map((el) => BigInt(el));

let result = 0n;
let min = pay[0];

for (let i = 0; i < N - 1; i++) {
  if (min > pay[i]) {
    min = pay[i];
  }
  result += min * load[i];
}

console.log(String(result));