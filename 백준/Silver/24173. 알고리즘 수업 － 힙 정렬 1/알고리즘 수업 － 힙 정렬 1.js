let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let cnt = 0;
let result = [];
let [N, M] = input[0].split(" ").map((el) => Number(el));
let arr = ["void", ...input[1].split(" ").map((el) => Number(el))];

function heapSort(arr) {
  build_min_heap(arr, N);
  for (let i = N; i >= 2; i--) {
    let temp = arr[i];
    arr[i] = arr[1];
    arr[1] = temp;

    cnt++;
    if (cnt === M) {
      result[0] = arr[1];
      result[1] = arr[i];
    }

    heapify(arr, 1, i - 1);
  }
}

function build_min_heap(arr, n) {
  for (let i = Math.floor(n / 2); i >= 1; i--) {
    heapify(arr, i, n);
  }
}
function heapify(arr, k, n) {
  let smaller;
  let left = 2 * k;
  let right = 2 * k + 1;
  if (right <= n) {
    if (arr[left] < arr[right]) {
      smaller = left;
    } else {
      smaller = right;
    }
  } else if (left <= n) smaller = left;
  else return;

  if (arr[smaller] < arr[k]) {
    let temp = arr[k];
    arr[k] = arr[smaller];
    arr[smaller] = temp;

    cnt++;
    if (cnt === M) {
      result[0] = arr[k];
      result[1] = arr[smaller];
    }
    heapify(arr, smaller, n);
  }
}
heapSort(arr);
result.sort((a, b) => a - b);
if (cnt < M) {
  console.log(-1);
} else {
  console.log(result.join(" "));
}

