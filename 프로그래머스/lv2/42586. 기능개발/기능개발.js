function solution(progresses, speeds) {
  var answer = [];
  let queue = [];
  let workDay = 0;
  let work = 0;
  let workCnt = 1;

  for (let i = 0; i < progresses.length; i++) {
    workDay = Math.ceil((100 - progresses[i]) / speeds[i]);
    queue.push(workDay);
  }

  while (queue.length !== 0) {
    // work에 변동이 있으면
    if (queue[0] > work) {
      if (progresses.length !== queue.length) answer.push(workCnt);
      work = queue.shift();
      workCnt = 1;
    } else {
      // queue[0] < work
      workCnt++;
      queue.shift();
    }
  }
  answer.push(workCnt);

  return answer;
}