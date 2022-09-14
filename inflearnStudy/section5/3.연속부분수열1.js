function solution(arr, m) {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    let temp = 0;

    for (let j = i; j < arr.length; j++) {
      temp += arr[j];
      if (temp === m) {
        answer++;
      }
    }
  }
  return answer;
}

let arr = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(arr, 6));
