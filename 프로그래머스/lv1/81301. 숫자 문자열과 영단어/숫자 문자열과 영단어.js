// 문자로된 부분을 숫자로 바꿔서 출력
function solution(s) {
  const strNum = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
  ];
  for (let i = 0; i < strNum.length; i++) {
    for (let j = 0; j < s.length; j++) {
      s = s.replace(strNum[i], i);
    }
  }
  return Number(s);
}

