function solution(num_list) {
    let mul = num_list.reduce((acc, cur) => acc * cur);
    let sum = num_list.reduce((acc, cur) => acc + cur);
    return sum**2 > mul ? 1 : 0;
}