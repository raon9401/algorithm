function solution(arr, k) {
    var answer = [];
    answer = k % 2 === 0 ? arr.map(item => item+k) : arr.map(item => item*k)
    return answer;
}