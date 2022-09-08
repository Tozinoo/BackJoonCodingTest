// function solution(str) {
//   let answer = str.toUpperCase();

//   return answer;
// }
let b = "75a";

function solution(str) {
  let answer = "";
  for (const x of str) {
    if (!(x.charCodeAt() >= 65 && x.charCodeAt() <= 90)) {
      answer += String.fromCharCode(x.charCodeAt() - 32);
    } else answer += x;
  }

  return answer;
}

console.log(solution("ItisTimeToStudy"));
