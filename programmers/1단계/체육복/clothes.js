function solution(n, lost, reserve) {
    let answer = 0;
    let temp = new Array(n + 2).fill(1);

    for (const v of lost) temp[v] -= 1;
    for (const v of reserve) temp[v] += 1;

    for (let i = 1; i < n + 1; i++) {
        if (temp[i] === 0) {
            if (temp[i - 1] === 2 || temp[i + 1] === 2) {
                if (temp[i - 1] === 2) {
                    temp[i - 1] -= 1;
                    temp[i] += 1;
                } else {
                    temp[i + 1] -= 1;
                    temp[i] += 1;
                }
            }
        }
    }

    for (const v of temp) {
        if (v > 0) answer += 1;
    }

    return answer - 2;
}

console.log(solution(5, [2, 4], [3]));
