function solution(n) {
  var answer = 0;
  let arr = [];
  let three = 1;
  while (n >= 3) {
    arr.push(parseInt(n % 3));
    n /= 3;
  }
  arr.push(parseInt(n % 3));
  console.log(arr);
  for (let i = arr.length - 1; i >= 0; i--) {
    answer += arr[i] * three;
    three *= 3;
  }
  return answer;
}