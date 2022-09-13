// function solution(arr) {
//     let answer = "";
//     let cnt = 0;
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//         for (let j = 0; j < arr[i].length; j++) {
//             console.log(arr[i].length);

//             for (let k = 0; k < arr[i].length; k++) {
//                 console.log(arr[i][j]);
//                 console.log(arr[i][k]);
//                 if (arr[i][j] > arr[i][k]) {
//                     b.push(arr[i][k]);
//                 }
//             }
//         }
//     }
//     console.log(a);
//     console.log(b);
//     return answer;
// }

// function solution(arr) {
//     let answer = [];

//     for (let i = 0; i < arr.length; i++) {
//         let test = arr[i];
//         if (i === 0) {
//             for (let x = 0; x < test.length; x++) {
//                 for (let y = 0; y < test.length; y++) {
//                     answer.push([test[x], test[y]]);
//                 }
//             }
//         } else {
//           let prevArr = [...answer];
//           answer = [];

//         }
//     }
//     console.log(answer);
//     return answer;
// }

let arr = [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
];
console.log(solution(arr));
