function solution(N, stages) {
    const stage = new Map();
    let answer = [];
    let i = stages.length;

    for (let i = 1; i <= N + 1; i++) {
        stage.set(i, 0);
    }

    for (const v of stages.sort()) {
        stage.set(v, stage.get(v) + 1);
    }
    stage.forEach((value, key, map) => {
        stage.set(key, parseFloat(value / i));
        i -= value;
    });
    stage.delete(N + 1);

    const mapSort = new Map([...stage.entries()].sort((a, b) => b[1] - a[1]));
    for (const v of mapSort.keys()) {
        answer.push(v);
    }

    return answer;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
