function solution(arr, m) {
    let n = arr.length;
    let answer = 0;
    arr.sort((a, b) => {
        if (a > b) return 1;
        if (a === b) return 0;
        if (a < b) return -1;
    });

    for (let i = 0; i < n; i++) {
        let money = m - (arr[i][0] / 2 + arr[i][1]);
        let cnt = 1;
        for (let j = 0; j < n; j++) {
            if (j !== i && arr[j][0] + arr[j][1] > money) break;
            if (j !== i && arr[j][0] + arr[j][1] <= money) {
                money -= arr[j][0] + arr[j][1];
                cnt++;
            }
        }
        answer = Math.max(answer, cnt);
    }
    return answer;
}

let arr = [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
];
console.log(solution(arr, 28));
