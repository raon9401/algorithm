function calc(num, str) {
  if (str === "S") num = parseInt(num);
  else if (str === "D") num = parseInt(num) ** 2;
  else if (str === "T") num = parseInt(num) ** 3;

  return num;
}

function solution(dartResult) {
  let strArr = [];
  let j = -1;
  let num = "";
  let str = ["S", "D", "T"];
  for (let i = 0; i < dartResult.length; i++) {
    if (str.includes(dartResult[i])) {
      if (dartResult[i - 1] === "0" && dartResult[i - 2] === "1") {
        num = "10";
        num = calc(num, dartResult[i]);
        if (dartResult[i + 1] === "#") num = num * -1;
        strArr.push(num);
        j++;
      } else {
        num = dartResult[i - 1];
        num = calc(num, dartResult[i]);
        if (dartResult[i + 1] === "#") num = num * -1;
        strArr.push(num);
        j++;
      }
    }
    if (dartResult[i] === "*") {
      if (j === 0) {
        strArr[j] *= 2;
      } else if (j === 1) {
        strArr[j - 1] *= 2;
        strArr[j] *= 2;
      } else if (j === 2) {
        strArr[j - 1] *= 2;
        strArr[j] *= 2;
      }
    }
  }
  return strArr.reduce((acc, cur) => acc + cur);
}