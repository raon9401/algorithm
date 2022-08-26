// 순열
function getPermutations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);
  // n개중에서 1개 선택할 때(nP1), 바로 모든 배열의 원소 return. 1개선택이므로 순서가 의미없음.

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    // 해당하는 fixed를 제외한 나머지 배열
    const permutations = getPermutations(rest, selectNumber - 1);
    // 나머지에 대해서 순열을 구한다.
    const attached = permutations.map((el) => [fixed, ...el]);
    //  돌아온 순열에 떼 놓은(fixed) 값 붙이기
    results.push(...attached);
    // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
}

// 소수 판단
function isDecimal(num) {
  if (num % 2 !== 0 && num > 2) {
    let sqrt = parseInt(Math.sqrt(num));
    for (let j = 3; j <= sqrt; j += 2) {
      if (num % j === 0) {
        console.log("소수x", num);
        return false;
      }
    }
    console.log("소수o", num);
    return true;
  }
}

function solution(numbers) {
  var answer = 0; // 카운트해주는 변수
  let card = numbers.split("");
  let arr = [];
  let num = [];
  for (let i = 1; i <= numbers.length; i++) {
    arr.push(...getPermutations(card, i));
  }
  for (let i = 0; i < arr.length; i++) {
    num.push(Number(arr[i].join("")));
  }
  num = [...new Set(num)];
  console.log(num);
  for (let i of num) {
    if (i === 2) {
      answer++;
    } else if (isDecimal(i)) {
      answer++;
    }
  }
  return answer;
}