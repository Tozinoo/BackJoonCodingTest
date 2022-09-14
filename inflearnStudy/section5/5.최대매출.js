function solution(arr, n) {
  let answer = [];

  for (let i = 0; i <= arr.length - n; i++) {
    let temp = 0;
    for (let j = 0; j < n; j++) {
      temp += arr[i + j];
    }
    answer.push(temp);
  }

  return Math.max(...answer);
}

let arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(arr, 3));
