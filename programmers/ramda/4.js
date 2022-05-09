function solution(matrix, k) {
    if (matrix.length === 0) return 0;
    if (k % 4 === 0) return matrix; // 0번 또는 4번 회전 시 그대로
    let result = matrix;

    if (k % 4 === 1) {
        // 1회 회전 시
        result = rotate(result);
    } else if (k % 4 === 2) {
        // 2회 회전 시
        for (let i = 0; i < 2; i++) {
            result = rotate(result);
        }
    } else if (k % 4 === 3) {
        // 3회 회전 시
        for (let i = 0; i < 3; i++) {
            result = rotate(result);
        }
    }
    return result;
}
const rotate = (matrix) => {
    let N = matrix.length;
    let result = [];
    for (let i = 0; i < matrix[0].length; i++) {
        // n회 회전 만큼 배열 생성
        result.push([]);
    }
    for (let i = 0; i < N; i++) {
        // n행을 n열로 변환
        for (let j = 0; j < N; j++) {
            result[j].push(matrix[i][j]);
        }
    }
    for (let i = 0; i < matrix[0].length; i++) {
        // 모든 행 reverse
        result[i].reverse();
    }
    return result;
};
/*
[4,7,3]
[1,3,5]
[2,4,6]
*/
console.log(
    rotate([
        [4, 1, 2],
        [7, 3, 4],
        [3, 5, 6],
    ])
);

console.log(
    solution([
        [4, 1, 2],
        [7, 3, 4],
        [3, 5, 6],
    ])
);

/* 
input
 [4,1,2],
 [7,3,4],
 [3,5,6],

 행렬을 오른쪽으로 90도 회전 k=1

output
 [3,7,4],
 [5,3,1],
 [6,4,2],

 1. 행렬의 첫번째 행이 행렬의 세번째 열이 된다.
 2. 행렬의 두번째 행이 행렬의 두번째 열이 된다.
 3. 행렬의 세번째 행이 행렬의 첫번째 열이 된다.

 */
