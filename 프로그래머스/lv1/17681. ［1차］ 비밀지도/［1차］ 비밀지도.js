function binary(n, num) {
  let result = [];
  for (let i = n - 1; i >= 0; i--) {
    result[i] = parseInt(num % 2);
    num /= 2;
  }
  return result;
}

function solution(n, arr1, arr2) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    arr1[i] = binary(n, arr1[i]);
    arr2[i] = binary(n, arr2[i]);
  }
  for (let i = 0; i < n; i++) {
    answer[i] = "";
    for (let j = 0; j < n; j++) {
      if (arr1[i][j] === 1 || arr2[i][j] === 1) {
        answer[i] += "#";
      } else {
        answer[i] += " ";
      }
    }
  }
  return answer;
}