function solution(N, stages) {
    let answer = [];
    for (let i = 1; i <= N; i++) {
        let reach = stages.filter((x) => x >= i);
        reach;
        let curr = stages.filter((x) => x === i);
        curr;
        answer.push([i, curr / reach]);
    }

    return answer.map((x) => x[0]);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
