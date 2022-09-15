// function solution(str) {
//     str = str.split("");
//     let stack = [];
//     let temp = 0;

//     while (str.length !== 0) {
//         stack.push(str[0]);
//         if (
//             str[0] === "*" ||
//             str[0] === "+" ||
//             str[0] === "-" ||
//             str[0] === "/"
//         ) {
//             stack;
//             let b = eval(
//                 `${stack[stack.length - 3]}${str[0]}${stack[stack.length - 2]}`
//             );
//             stack.pop();
//             stack.pop();
//             stack.pop();
//             stack.push(String(b));
//         }
//         str.shift();
//     }

//     return stack[0];
// }

function solution(str) {
  let stack = [];
  for (const x of str) {
    x;
    console.log(!isNaN(parseInt(x)));
    if (!isNaN(parseInt(x))) stack.push(parseInt(x));
    else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === "+") stack.push(lt + rt);
      else if (x === "-") stack.push(lt - rt);
      else if (x === "*") stack.push(lt * rt);
      else if (x === "/") stack.push(lt / rt);
    }
    stack;
  }

  return stack[0];
}

let str = "352+*9-";
console.log(solution(str));
