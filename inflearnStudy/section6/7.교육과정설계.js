function solution(str, N) {
  let n = N.length;
  let queue = N.split("");
  str = str.split("");

  for (let i = 0; i < n; i++) {
    if (str[0] === queue[0]) {
      str.shift();
      queue.shift();
    } else {
      queue.shift();
    }
  }

  let answer = "";

  return str.length >= 1 ? "NO" : "YES";
}

let str = "CBA";
let N = "CBADGE";
console.log(solution(str, N));
