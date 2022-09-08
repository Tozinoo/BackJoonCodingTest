function solution(n, arr) {
  let answer = [];
  arr.unshift(n);

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] >= arr[i]) answer.push(arr[i + 1]);
  }
  return answer;
}

let arrr = [7, 3, 9, 5, 6, 12];
console.log(solution(6, arrr));
