let input = require("fs")
  .readFileSync('/dev/stdin')
  .toString()
  .trim();

const greedy = (str) => {
  let cnt = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      cnt++;
    }
  }
  return Math.floor(cnt/2);
};

console.log(greedy(input));