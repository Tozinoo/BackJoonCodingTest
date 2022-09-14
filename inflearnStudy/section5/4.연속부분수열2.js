function solution(arr, m) {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    let temp = 0;

    for (let j = i; j < arr.length; j++) {
      console.log(arr[j]);
      temp += arr[j];
      console.log(temp);
      if (temp <= m) {
        answer++;
      }
    }
  }
  return answer;
}

let arr = [1, 3, 1, 2, 3];
console.log(solution(arr, 5));
