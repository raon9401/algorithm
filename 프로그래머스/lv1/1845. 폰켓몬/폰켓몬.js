// nums -> 배열
// 출력 : 입력받은 배열에서 고를수 있는 종류
// 폰켓몬은 nums.length/2 만큼 고를 수 있다.

function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length
}