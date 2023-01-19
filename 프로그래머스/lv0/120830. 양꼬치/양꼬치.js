function solution(n, k) {
    let drink = k-Math.floor(n/10);
    return n*12000 + drink*2000;
}