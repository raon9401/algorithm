// answers : 정답 배열
// 1번 수포자 1~5 순서대로 찍음
// 2번 수포자 2, 1, 2, 3, 2, 4, 2, 5  의 반복
// 3번 수포자 3 3 1 1 2 2 4 4 5 5 의 반복
function solution(answers) {
  const result = [];
  const score = [0, 0, 0];
  const math1 = [1, 2, 3, 4, 5]; // length 5
  const math2 = [2, 1, 2, 3, 2, 4, 2, 5]; // length 8
  const math3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; // length 10
  let bigScore = 0;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === math1[i % math1.length]) {
      score[0]++;
    }
    if (answers[i] === math2[i % math2.length]) {
      score[1]++;
    }
    if (answers[i] === math3[i % math3.length]) {
      score[2]++;
    }
  }
  bigScore = score[0];
  for(let i = 1; i < score.length; i++){
    if(bigScore <= score[i]){
      bigScore = score[i];
    }
  }
  if (score[0] === bigScore) {
    result.push(1);
  }
  if (score[1] === bigScore) {
    result.push(2);
  }
  if (score[2] === bigScore) {
    result.push(3);
  }

  return result;
}