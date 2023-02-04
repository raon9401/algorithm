function solution(age) {
    let answer = "";
    const alpha = ["a","b","c",'d','e','f','g','h','i','j']
    const strarr = String(age)
    for(let i = 0; i < strarr.length; i++){
        answer += alpha[Number(strarr[i])];
    }
    return answer;
}