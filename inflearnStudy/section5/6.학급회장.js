// function solution(str) {
//   str = str.split("");
//   let answer = new Map();
//   for (let i = 0; i < str.length; i++) {
//     answer.set(
//       str[i],
//       answer.get(str[i]) === undefined ? 1 : answer.get(str[i]) + 1
//     );
//   }

//   return [...answer.entries()].reduce((a, b) => (a[1] > b[1] ? a : b))[0];
// }

function solution(str) {
  let answer = new Map();
  let answer1 = "";
  for (let i = 0; i < str.length; i++) {
    answer.set(str[i], answer.has(str[i]) ? answer.get(str[i]) + 1 : 1);
  }

  let temp = 0;
  for (const [key, value] of answer) {
    temp;
    if (value > temp) {
      answer1 = key;
      temp = value;
    }
  }

  return answer1;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
