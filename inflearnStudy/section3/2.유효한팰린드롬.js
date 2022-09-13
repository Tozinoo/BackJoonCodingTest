function solution(str) {
  let cnt = 0;
  str = str.replace(/[^a-zA-Z]/g, "").toUpperCase();

  for (let i = 0; i < parseInt(str.length / 2); i++) {
    if (str[i] === str[str.length - i - 1]) {
      cnt++;
    }
  }

  return parseInt(str.length / 2) === cnt ? "YES" : "NO";
}

console.log(solution("found7, time: study; Yduts; emit, 7Dnuof"));
