function solution(N, stages) {
  var answer = [];
  let fail = 0;
  let challenger = 0;
  let obj = {};

  for (let i = 1; i <= N; i++) {
    fail = stages.filter((el) => el === i).length;
    challenger = stages.filter((el) => el >= i).length;
    obj[i] = fail / challenger;
  }
  let objtwo = Object.entries(obj).sort(([, a], [, b]) => b - a);
  for (let i of objtwo) {
    answer.push(Number(i[0]));
  }

  return answer;
}