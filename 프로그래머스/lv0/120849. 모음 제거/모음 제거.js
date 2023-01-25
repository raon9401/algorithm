function solution(my_string) {
    let answer = '';
    let strCpy = my_string.split('');
    const arr = 'aeiou';
    for(let i of strCpy){
        if(!arr.includes(i)){
            answer+=i;
        }
    }
    return answer;
}