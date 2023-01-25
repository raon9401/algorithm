function solution(my_string) {
    var answer = 0;
    let reg = my_string.replace(/[^0-9]/g,'')
    answer = reg.split('').map(i => Number(i)).reduce((a,c) => a+c)
    return answer;
}