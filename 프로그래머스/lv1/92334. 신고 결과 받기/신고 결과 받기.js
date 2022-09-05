function solution(id_list, report, k) {
  var answer = {};
  let userMap = {};
  report = [...new Set(report)]; // 한명이 다른 한명을 한번만 신고 가능.
  for (let i = 0; i < id_list.length; i++) {
    userMap[id_list[i]] = [];
    answer[id_list[i]] = 0;
  }
  for (let i = 0; i < report.length; i++) {
    report[i] = report[i].split(" ");
    userMap[report[i][1]].push(report[i][0]);
  }
  for (let i = 0; i < id_list.length; i++) {
    if (userMap[id_list[i]].length >= k) {
      for (let j = 0; j < userMap[id_list[i]].length; j++) {
        answer[userMap[id_list[i]][j]]++;
      }
    }
  }

  return Object.values(answer);
}