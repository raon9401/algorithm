function solution(n, times) {
  let min = Math.min(...times);
  let max = Math.max(...times) * n;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);

    // 중간 값으로 몇명을 심사할 수 있는지 확인.
    let cnt = times.reduce((acc, cur) => (acc += Math.floor(mid / cur)), 0);
    if (cnt >= n) {
      min = Math.min(min, mid);
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }
  return min;
}