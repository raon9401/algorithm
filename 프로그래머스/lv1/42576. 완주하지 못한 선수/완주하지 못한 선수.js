// 완주하지 못한 단 한명의 이름을 출력
// participant : 참가자
// completion : 완주자

function solution(participant, completion) {
  const obj = {};
  // 완주한 사람들을 특정 값을 가진 객체로 변환.
  for(let i of participant){
      if(obj[i] === undefined){
          obj[i] = 1;
      } else {
          obj[i]++;
      }
  }
  // 객체에서 완주자들은 0으로 바꿈
  for(let i of completion){
      if(obj[i] !== 0){
          obj[i]--;
      }
  }
  for(let property in obj){
    if(obj[property] === 1){
      return property;
    }
  }
}