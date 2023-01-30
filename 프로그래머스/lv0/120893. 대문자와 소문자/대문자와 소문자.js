function solution(my_string) {
    var answer = '';
    for(let i of my_string){
        if(i.charCodeAt() >= 97 && i.charCodeAt() <= 122 ){
            answer += i.toUpperCase()
        }
        else if(i.charCodeAt() >= 65 && i.charCodeAt() <= 90 ){
            answer += i.toLowerCase()
        }
    }
    return answer;
}