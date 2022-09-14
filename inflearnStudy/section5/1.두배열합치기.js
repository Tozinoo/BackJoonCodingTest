function solution(arr1, arr2) {
  arr1 = arr1.concat(arr2);
  arr1.sort((a, b) => {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  });

  return arr1;
}

let arr1 = [1, 3, 5];
let arr2 = [2, 3, 6, 7, 9];
console.log(solution(arr1, arr2));
