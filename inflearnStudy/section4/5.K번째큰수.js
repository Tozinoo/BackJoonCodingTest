function solution(arr, n) {
  let answer = "";
  let tmp = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        tmp.push(arr[i] + arr[j] + arr[k]);
      }
    }
  }
  tmp.sort((b, a) => {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  });

  return tmp[2];
}
/*
0 1 2   62
0 1 3   51
0 1 4
...
0 1 9

0 2 3
0 2 4

1 2 3   72
1 2 4
1 2 5
...
1 2 9

2 3 4
*/
let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(arr, 3));
