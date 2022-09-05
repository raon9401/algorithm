function solution(id_list, report, k) {
  var answer = {};
  let userMap = {};
  report = [...new Set(report)]; // 한명이 다른 한명을 한번만 신고 가능. 중복 제거
  for (let i of id_list) {
    userMap[i] = [];
    answer[i] = 0;
  }
  for (let i = 0; i < report.length; i++) {
    report[i] = report[i].split(" ");
    userMap[report[i][1]].push(report[i][0]);
  }
  for (let i of id_list) {
    if (userMap[i].length >= k) {
      for (let j = 0; j < userMap[i].length; j++) {
        answer[userMap[i][j]]++;
      }
    }
  }

  return Object.values(answer);
}