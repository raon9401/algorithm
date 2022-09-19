const isPrime = (num) => {
  if (num === 2) {
    return true;
  } else if (num % 2 !== 0) {
    let sqrt = parseInt(Math.sqrt(num));
    for (let j = 3; j <= sqrt; j += 2) {
      if (num % j === 0) {
        // console.log("소수x", num);
        return false;
      }
    }
    // console.log("소수o", num);
    return true;
  }
};

function solution(n, k) {
  var answer = 0;
  // k 진수로 변경
  let num = n.toString(k);
  let arr = num.split("0");
  for (let i of arr) {
    let n = Number(i);
    if (isPrime(n) && n > 1) {
      answer++;
    }
  }
  return answer;
}