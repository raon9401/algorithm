function solution(arr) {
  var answer = 1;
  let numArr = [2, 3, 5, 7];
  for (let i of numArr) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] % i === 0) {
        answer *= i;
        // console.log(answer, i, arr[j]);
      }
    }
  }
  return answer;
}
