function solution(land) {
  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < 4; j++) {
      land[i][j] += Math.max(...land[i - 1].filter((el, index) => index !== j));
    }
  }
  return Math.max(...land[land.length - 1]);
}