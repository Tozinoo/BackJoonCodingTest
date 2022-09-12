function solution(a, b, c) {
    console.log(Math.min(a, b, c));
    return a < b ? (a < c ? a : c) : b < c ? b : c;
}

console.log(solution(6, 5, 11));
