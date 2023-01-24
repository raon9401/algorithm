function solution(array) {
    let answer = 0;
    let sortArr = array.sort((a,b) => a-b)
    answer = sortArr[(array.length-1) / 2];
    return answer;
}