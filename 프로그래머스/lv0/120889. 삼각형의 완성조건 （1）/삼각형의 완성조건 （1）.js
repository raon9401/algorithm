function solution(sides) {
    let answer = 0;
    const sortSides = sides.sort((a,b) => a - b)
    if(sortSides[2] >= (sortSides[1] + sortSides[0])){
        answer = 2;
    } else{
        answer = 1;
    }
    return answer;
}