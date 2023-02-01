function solution(my_string) {
    var answer = my_string.replace(/[a-z]/g,'').split('').map(i => Number(i)).sort((a,b)=>a-b);
    
    return answer;
}