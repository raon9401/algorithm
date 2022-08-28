function getCombinations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
}

function solution(nums) {
  var answer = 0;
  let arr = getCombinations(nums, 3);
  for (let i = 0; i < arr.length; i++) {
    let dec = arr[i].reduce((acc, cur) => acc + cur);
    let isDecimal = true;
    if (dec % 2 !== 0) {
      let sqrt = parseInt(Math.sqrt(dec));
      for (let j = 3; j <= sqrt; j += 2) {
        if (dec % j === 0) {
          isDecimal = false;
          break;
        }
      }
      if (isDecimal) {
        answer++;
      }
    }
  }
  return answer;
}