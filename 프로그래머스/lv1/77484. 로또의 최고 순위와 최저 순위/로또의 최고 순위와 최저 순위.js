function solution(lottos, win_nums) {
  var answer = [0, 0];
  let result = [];
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      if (win_nums[i] === lottos[j]) {
        answer[1]++;
      }
    }
    if (lottos[i] === 0) {
      answer[0]++;
    }
  }
  answer[0] += answer[1];
  result = answer.map((el) => {
    if (el === 6) {
      return 1;
    } else if (el === 5) {
      return 2;
    } else if (el === 4) {
      return 3;
    } else if (el === 3) {
      return 4;
    } else if (el === 2) {
      return 5;
    } else return 6;
  });

  return result;
}