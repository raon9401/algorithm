function solution(sizes) {
  let maxSizeOne = 0;
  let maxSizeTwo = 0;

  for (let i = 0; i < sizes.length; i++) {
    sizes[i].sort((a, b) => a - b);
    if (maxSizeOne < sizes[i][0]) {
      maxSizeOne = sizes[i][0];
    }
    if (maxSizeTwo < sizes[i][1]) {
      maxSizeTwo = sizes[i][1];
    }
  }
  return maxSizeOne * maxSizeTwo;
}