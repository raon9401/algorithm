function solution(n, numlist) {
    var answer = [];
    answer = numlist.filter(i => i%n ===0)
    return answer;
}