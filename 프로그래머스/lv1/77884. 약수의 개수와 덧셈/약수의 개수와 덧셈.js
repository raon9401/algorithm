function solution(left, right) {
  var answer = 0;
  let sqrtNum = 0;
  for (let i = left; i <= right; i++) {
    sqrtNum = parseInt(Math.sqrt(i));
    if (sqrtNum * sqrtNum === i) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}