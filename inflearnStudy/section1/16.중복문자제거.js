// function solution(str) {
//   let answer = [...new Set(str)].join("");

//   return answer;
// }

// function solution(str) {
//   str = str.split("");

//   let answer = str.filter((e, i) => {
//     return str.indexOf(e) === i;
//   });

//   return answer.join("");
// }

function solution(str) {
  let answer = "";

  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === i) {
      answer += str[i];
    }
  }

  return answer;
}

console.log(solution("ksekkset"));
