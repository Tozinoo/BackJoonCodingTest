function solution(str, n) {
  let answer = str.split(n).length - 1;

  return answer;
}

console.log(solution("COMPUTERPROGRAMMING", "R"));
