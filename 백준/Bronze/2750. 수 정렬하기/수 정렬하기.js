const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let arr = [];
for (let i = 0; i < input.length - 1; i++) {
  arr[i] = Number(input[i + 1]);
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i];
    let left = i - 1;
    while (left >= 0 && arr[left] > cur) {
      arr[left + 1] = arr[left];
      arr[left] = cur;
      left--;
    }
  }
console.log(arr.reduce((acc, el) => acc + `${el}\n`, ""));

}

insertionSort(arr);
