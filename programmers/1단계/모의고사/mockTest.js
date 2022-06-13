function solution(answers) {
    let answer = [];

    let a = [1, 2, 3, 4, 5];
    let b = [2, 1, 2, 3, 2, 4, 2, 5];
    let c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let a1 = answers.filter((v, i) => v === a[i % 5]).length;
    let b1 = answers.filter((v, i) => v === b[i % 8]).length;
    let c1 = answers.filter((v, i) => v === c[i % 10]).length;

    let max = Math.max(a1, b1, c1);

    if (a1 === max) answer.push(1);
    if (b1 === max) answer.push(2);
    if (c1 === max) answer.push(3);

    return answer;
}

console.log(solution([1, 3, 2, 4, 2]));

function repeating(num, person) {
    switch (person) {
        case "a":
            return Math.ceil(num / 5);
        case "b":
            return Math.ceil(num / 8);
        case "c":
            return Math.ceil(num / 10);
        default:
            break;
    }
}
