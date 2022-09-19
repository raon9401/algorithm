function solution(fees, records) {
  var answer = [];
  let arr = [];
  let obj = {};
  // 기본시간, 기본 요금, 단위 시간, 단위 요금
  // 식 : ot 보다 작은 시간의 경우 : 기본요금만 냄
  // Math.ceil((주차된 시간 - ot)/ht) *hp+op
  let [ot, op, ht, hp] = fees;
  // 0 : 시간, 1 : 번호, 2 : 주차/출차 여부
  for (let el of records) {
    arr.push(el.split(" "));
  }
  for (let i = 0; i < arr.length; i++) {
    // obj[arr[i][1]][0] = 시간
    // obj[arr[i][1]][1] = 분
    // obj[arr[i][1]][2] = 주차된 시간.
    // obj[arr[i][1]][3] = IN/OUT 판별.
    if (arr[i][2] === "IN") {
      if (obj[arr[i][1]] === undefined)
        obj[arr[i][1]] = [...arr[i][0].split(":"), 0, "IN"];
      else {
        obj[arr[i][1]] = [...arr[i][0].split(":"), obj[arr[i][1]][2], "IN"];
      }
    }
    if (arr[i][2] === "OUT") {
      let timeHour = Number(obj[arr[i][1]][0]);
      let timeMin = Number(obj[arr[i][1]][1]);
      let outTime = arr[i][0].split(":");
      let parkingTime =
        (Number(outTime[0]) - timeHour) * 60 + (Number(outTime[1]) - timeMin);

      obj[arr[i][1]][2] += parkingTime;
      obj[arr[i][1]][3] = "OUT";
    }
  }

  let parkKey = Object.keys(obj).sort((a, b) => a - b);
  // 출차 안한 경우 처리
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i][1]][3] === "IN") {
      let timeHour = Number(obj[arr[i][1]][0]);
      let timeMin = Number(obj[arr[i][1]][1]);
      let parkingTime = (23 - timeHour) * 60 + (59 - timeMin);

      obj[arr[i][1]][2] += parkingTime;
      obj[arr[i][1]][3] = "OUT";
    }
  }
  // Math.ceil((주차된 시간 - ot)/ht) *hp+op
  for (let i = 0; i < parkKey.length; i++) {
    let pay = 0;
    if (obj[parkKey[i]][2] > ot) {
      pay = Math.ceil((obj[parkKey[i]][2] - ot) / ht) * hp + op;
    } else {
      pay = op;
    }
    answer.push(pay);
  }
  return answer;
}