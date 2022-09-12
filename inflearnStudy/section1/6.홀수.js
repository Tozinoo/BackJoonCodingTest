// function solution(arr) {
//     let answer = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 1) {
//             answer.push(arr[i]);
//         }
//     }

//     return [
//         answer.reduce((pv, cv) => {
//             return pv + cv;
//         }, 0),
//         Math.min(...answer),
//     ];
// }
function solution(arr) {
    let answer = [];
    let sum = 0,
        min = arr[0];

    for (const x of arr) {
        if (x % 2 === 1) {
            sum += x;
            if (x < min) {
                min = x;
            }
        }
    }
    answer[0] = sum;
    answer[1] = min;

    return answer;
}

console.log(solution([12, 77, 38, 41, 53, 92, 85]));
