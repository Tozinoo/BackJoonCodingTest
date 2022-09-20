function solution(arr) {
  let answer = [];

  let under = 0;
  let over = 0;

  let temp = [];

  for (let i = 0; i <= 255; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] >= i) {
        over++;
      } else {
        under++;
      }
    }
    temp.push(Math.abs(over - under));
    under = over = 0;
  }
  let getMin = Math.min(...temp);
  getMin;

  for (let i = 0; i <= 255; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] >= i) {
        over++;
      } else {
        under++;
      }
    }
    if (Math.abs(under - over) === getMin) {
      console.log(i);
      answer.push(i);
    }
    under = over = 0;
  }

  answer = Math.min(...answer);

  return answer;
}

let arr = [1, 52, 125, 10, 25, 201, 244, 192, 128, 23, 203, 98, 154, 255];
let arr1 = [0, 0, 255, 255, 0, 0, 255, 255, 255];
let arr2 = [100, 50, 100, 200];
console.log(solution(arr));
