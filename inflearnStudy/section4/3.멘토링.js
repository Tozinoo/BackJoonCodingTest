function solution(arr) {
  let answer = "";
  let a = [];
  let b = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i].length);

      for (let k = 0; k < arr[i].length; k++) {
        console.log(arr[i][j]);
        console.log(arr[i][k]);
        if (arr[i][j] > arr[i][k]) {
          b.push(arr[i][k]);
        }
      }
    }
  }
  console.log(a);
  console.log(b);
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
