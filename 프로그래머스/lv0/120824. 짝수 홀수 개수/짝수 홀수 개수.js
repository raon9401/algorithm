function solution(num_list) {
    const answer = [];
    let evenCnt = 0; 
    let oddCnt = 0;
    for(let i of num_list){
        if(i%2 === 0){
            evenCnt++;
        }else{
            oddCnt++;
        }
    }
    answer[0] = evenCnt;
    answer[1] = oddCnt;
    
    return answer;
}