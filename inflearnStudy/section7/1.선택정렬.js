function solution(str) {
  let answer = str;
  for (let i = 0; i < str.length; i++) {
    let idx = i;
    for (let j = i + 1; j < str.length; j++) {
      if (str[j] < str[idx]) idx = j;
    }
    let tmp = str[i];
    str[i] = str[idx];
    str[idx] = tmp;
  }

  return answer;
}

let str = [13, 5, 11, 7, 23, 15];
console.log(solution(str));
