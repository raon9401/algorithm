function solution(a, b) {
  let sum = 0;
  let month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let week = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  for (let i = 0; i < a - 1; i++) {
    sum += month[i];
  }
  sum += b;
  return week[sum % 7];
}
