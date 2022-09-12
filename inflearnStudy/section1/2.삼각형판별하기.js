function solution(a, b, c) {
    let answer = [a, b, c].sort((a, b) => {
        if (a > b) return 1;
        if (a === b) return 0;
        if (a < b) return -1;
    });

    return answer[0] + answer[1] > answer[2] ? "YES" : "NO";
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
