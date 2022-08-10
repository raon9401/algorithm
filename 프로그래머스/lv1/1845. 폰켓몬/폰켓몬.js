// nums -> 배열
// 출력 : 입력받은 배열에서 고를수 있는 종류
// 폰켓몬은 nums.length/2 만큼 고를 수 있다.

function solution(nums) {
    var answer = 0;
    const obj = {};
    let kinds = 0;
    let canChoice = nums.length/2;
    
    nums.forEach(el => {obj[el] = true});
    kinds = Object.keys(obj).length;
    if(canChoice >= kinds) answer = kinds;
    else answer = canChoice;
    
    return answer;
}