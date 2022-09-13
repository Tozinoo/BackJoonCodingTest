function solution(str) {
  let answer = "";
  str = str + " ";
  let cnt = 1;
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) cnt++;
    else {
      answer += str[i];
      if (cnt > 1) answer += cnt;
      cnt = 1;
    }
  }

  answer;

  return str;
}
// ' ' 'K' 'K'
//  K   K   H
console.log(solution("KKHSSSSSSSE"));
