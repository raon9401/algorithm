function solution(my_string, n) {
    var answer = '';
    let strLen = my_string.length
    return my_string.slice(strLen-n,strLen);
}