// function solution(absolutes, signs) {
//     let answer = 0;
//     signs.forEach((v, i) => {
//         if (v) {
//             answer += absolutes[i];
//         } else {
//             answer -= absolutes[i];
//         }
//     });
//     return answer;
// }

function solution(absolutes, signs) {
    return absolutes.reduce((pv, cv, i) => pv + (signs[i] ? cv : -cv), 0);
}

console.log(solution([4, 7, 12], [true, false, true]));
