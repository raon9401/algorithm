function solution(s) {
  let cnt = 0;

  for (let i of s) {
    if (i === "(") cnt++;
    else if (i === ")") cnt--;
    if (cnt < 0) {
      return false;
    }
  }

  if (cnt === 0) {
    return true;
  }
  return false;
}