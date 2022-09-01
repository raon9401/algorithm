function solution(arr1, arr2) {
  let answer = [];
  let arr = [];
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let k = 0; k < arr2[0].length; k++) {
      for (let j = 0; j < arr2.length; j++) {
        sum += arr1[i][j] * arr2[j][k];
      }
      arr.push(sum);
      sum = 0;
    }
    answer.push(arr);
    arr = [];
  }
  return answer;
}