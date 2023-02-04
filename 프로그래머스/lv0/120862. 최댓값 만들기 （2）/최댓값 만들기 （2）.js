function solution(numbers) {
    var answer = 0;
    numbers.sort((a,b) => a-b);
    answer = Math.max(numbers[0] * numbers[1], numbers[numbers.length-1] * numbers[numbers.length-2])
    /*
    if(arr[0] * arr[1] >= arr[arr.length-1]*arr[arr.length-2]){
        answer = arr[0] * arr[1];
    } else{
        answer = arr[arr.length-1]*arr[arr.length-2];
    }
    */
    return answer;
}