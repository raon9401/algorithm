let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((el) => Number(el));

let [A, B] = input;
if (A > B) {
  console.log(`>`);
} else if (A < B) {
  console.log(`<`);
} else if (A === B) {
  console.log(`==`);
}
