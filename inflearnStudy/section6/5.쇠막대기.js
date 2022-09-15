function solution(str) {
  let stack = [];
  let answer = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") stack.push("(");
    else {
      if (str[i - 1] === "(") {
        stack.pop();
        answer += stack.length;
      } else if (str[i - 1] === ")") {
        stack.pop();
        answer++;
      }
    }
  }

  return answer;
}

let str = "(((()(()()))(())()))(()())";
console.log(solution(str));
