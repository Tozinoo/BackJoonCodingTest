// function solution(str) {
//   return str.replaceAll("A", "#");
// }

// function solution(str) {
//   let answer = "";
//   for (const x of str) {
//     if (x === "A") answer += "#";
//     else answer += x;
//   }
//   return answer;
// }

function solution(str) {
  return str.replace(/A/g, "#");
}

console.log(solution("BANANA"));
