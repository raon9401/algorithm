function solution(my_string, num1, num2) {
    const answer = my_string.split('');
    // swap 사용
    let tmp = answer[num1]
    answer[num1] = answer[num2]
    answer[num2] = tmp;
    
    return answer.join('');
}