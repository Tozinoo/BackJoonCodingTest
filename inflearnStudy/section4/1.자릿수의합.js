function solution(arr) {
  let temp = 0;
  let answer;
  for (let x of arr) {
    let numToString = String(x);
    let cnt = 0;
    for (let i = 0; i < numToString.length; i++) {
      cnt += parseInt(numToString[i]);
    }
    if (cnt > temp) {
      temp = cnt;
      answer = x;
    } else if (cnt === temp) {
      if (answer <= x) {
        answer = x;
      }
    }
  }

  return answer;
}

let arr = [192, 460, 603, 40, 521, 156, 123];
console.log(solution(arr));
