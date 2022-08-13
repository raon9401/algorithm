function solution(absolutes, signs) {
  return absolutes.reduce((acc, cur, i) => {
    return signs[i] ? acc + cur : acc + (cur * -1);
  },0);
}