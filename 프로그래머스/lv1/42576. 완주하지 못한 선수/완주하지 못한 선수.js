function solution(participant, completion) {
  const obj = {};
  for (let el of participant) {
    // 객체에 키 : 벨류 할당
    obj[el] = 0;
  }
  for (let el of participant) {
    // 참가한 사람 카운트
    obj[el]++;
  }
  for (let el of completion) {
    // 객체에서 완주한 사람 제외
    obj[el]--;
  }
  for (let el of participant) {
    if (obj[el] === 1) return el;
  }
}