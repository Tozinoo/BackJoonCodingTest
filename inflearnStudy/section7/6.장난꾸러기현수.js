function solution(arr) {
  let real = JSON.parse(JSON.stringify(arr));
  arr.sort((a, b) => {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  });
  let temp = arr;
  let answer = [];
  for (let i = 0; i < real.length; i++) {
    if (real[i] !== temp[i]) answer.push(i + 1);
  }
  real;
  temp;

  return answer;
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
// let arr = [120, 130, 150, 150, 130, 150];
console.log(solution(arr));
