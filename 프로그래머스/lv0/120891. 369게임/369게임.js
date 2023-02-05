function solution(order) {
    let answer = 0;
    let str = String(order);
    for(let i of str){
        if(Number(i) % 3 === 0 && Number(i) !== 0){
            answer++;
        }
    }
    return answer;
}