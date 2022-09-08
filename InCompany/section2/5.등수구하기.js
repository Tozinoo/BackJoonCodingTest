// function solution(arr) {
//   let answer = "";
//   let win;

//   for (let i = 0; i < arr.length; i++) {
//     win = 1;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] < arr[j]) win++;
//     }
//     answer += win;
//   }

//   return answer;
// }

function solution(arr) {
  let n = arr.length;
  let answer = Array.from({ length: 5 }, () => 1);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) answer[i]++;
    }
  }

  return answer;
}

console.log(solution([87, 89, 92, 100, 76]));
