function solution(arr, moves) {
    let n = arr.length;
    let answer = 0;
    let stack = [];

    moves.map((v) => {
        for (let i = 0; i < n; i++) {
            if (arr[i][v - 1] !== 0) {
                stack.push(arr[i][v - 1]);
                arr[i][v - 1] = 0;
                break;
            }
            if (stack.length >= 2) {
                if (stack[stack.length - 2] === stack[stack.length - 1]) {
                    stack.pop();
                    stack.pop();
                    answer++;
                }
            }
        }
    });

    console.log(stack);
    return answer * 2;
}

let arr = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
];
let moves = [1, 5, 3, 5, 1, 2, 1, 4];
// 4 3 1 1 3 2 x 4
console.log(solution(arr, moves));
