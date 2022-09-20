const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split();
let N = Number(input[0]);

var answer = [];
let count = 0;
let result = "";
// from : 시작 탑
// to : 도착 탑
// other : 경유 탑
const hanoi = (num, from, to, other) => {
  if (num === 0) return;
  hanoi(num - 1, from, other, to);
  answer.push([from, to]);
  hanoi(num - 1, other, to, from);
  count++;
  return count;
};
result += hanoi(N, 1, 3, 2) + "\n";
for (let i of answer) {
  result += `${i[0]} ${i[1]}\n`;
}
console.log(result);
