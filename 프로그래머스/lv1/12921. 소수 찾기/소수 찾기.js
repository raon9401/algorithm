function solution(n) {
  var answer = 1;
  for (let i = 3; i <= n; i += 2) {
    let isDecimal = true;
    let sqrt = parseInt(Math.sqrt(i));
    for (let j = 3; j <= sqrt; j += 2) {
      if (i % j === 0) {
        isDecimal = false;
        break;
      }
    }
    if (isDecimal) {
      answer++;
    }
  }

  return answer;
}