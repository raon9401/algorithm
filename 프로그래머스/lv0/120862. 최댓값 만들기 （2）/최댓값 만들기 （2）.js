function solution(numbers) {
    var answer = 0;
    const arr = numbers.sort((a,b) => a-b);
    if(arr[0] * arr[1] >= arr[arr.length-1]*arr[arr.length-2]){
        answer = arr[0] * arr[1];
    } else{
        answer = arr[arr.length-1]*arr[arr.length-2];
    }
    return answer;
}