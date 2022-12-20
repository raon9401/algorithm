const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, ...dummy] = input;
const newArr = dummy.map((el) => el.split(" "));

newArr.sort((a, b) => {
  if (a[1] !== b[1]) {
    return b[1] - a[1];
  }
  else {
    if (a[2] !== b[2]) {
      return a[2] - b[2];
    }
    else {
      if (a[3] !== b[3]) {
        return b[3] - a[3];
      }
      else {
        for (let i = 0; i < 10; i++) {
          if (a[0].charCodeAt(i) !== b[0].charCodeAt(i))
            return a[0].charCodeAt(i) - b[0].charCodeAt(i);
        }
      }
    }
  }
});

let result = "";
for (let i of newArr) {
  result = result + i[0] + "\n";
}
console.log(result);