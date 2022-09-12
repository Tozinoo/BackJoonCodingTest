function solution(str) {
  let answer;
  if (str.length % 2 === 0) {
    answer = str[str.length / 2 - 1] + str[str.length / 2];
  } else {
    answer = str[parseInt(str.length / 2)];
  }

  return answer;
}

console.log(solution("study"));
console.log(solution("good"));
