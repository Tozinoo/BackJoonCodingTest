function solution(str) {
  let answer = str;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] < str[j]) {
        [str[i], str[j]] = [str[j], str[i]];
      }
      i++;
    }
  }

  return answer;
}

let str = [13, 5, 11, 7, 23, 15];

/*
1 2 3 4 5 6

123456798
*/
