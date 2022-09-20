function solution(arr) {
  let answer = 0;
  arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  arr;
  let start = 0,
    end = 0;
  for (let i = 0; i < arr.length; i++) {
    start;
    end;
    console.log(arr[i][0], arr[i][1]);
    if (arr[i][0] >= end && arr[i][1] >= start) {
      start = arr[i][0];
      end = arr[i][1];
      answer++;
    }
  }

  return answer;
}

let arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];
console.log(solution(arr));
