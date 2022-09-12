function solution(n, arr) {
  let answer = arr[0];
  for (let i = 0; i < n; i++) {
    if (arr[i].length > answer.length) answer = arr[i];
  }
  return answer;
}

let arr = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(5, arr));
