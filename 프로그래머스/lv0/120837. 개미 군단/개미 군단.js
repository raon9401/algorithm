function solution(hp) {
    let answer = 0;
    let rem = hp;
    const ant = [5,3,1];
    for(let i = 0; i < ant.length; i++){
        answer += Math.floor(rem / ant[i])
        rem = rem % ant[i];
    }
    return answer;
}