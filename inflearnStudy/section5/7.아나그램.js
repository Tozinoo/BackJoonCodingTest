// function solution(str1, str2) {
//   let strmap1 = new Map();
//   let strmap2 = new Map();

//   for (let i = 0; i < str1.length; i++) {
//     strmap1.set(str1[i], strmap1.has(str1[i]) ? strmap1.get(str1[i]) + 1 : 1);
//     strmap2.set(str2[i], strmap2.has(str2[i]) ? strmap2.get(str2[i]) + 1 : 1);
//   }
//   strmap1;
//   strmap2;

//   return (
//     JSON.stringify([...strmap1.entries()].sort()) ==
//     JSON.stringify([...strmap2.entries()].sort())
//   );
// }

function solution(str1, str2) {
  let answer = "YES";
  let sH = new Map();
  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }

  for (let x of str2) {
    if (!sH.has(x) || sH.get(x) == 0) return "NO";
    sH.set(x, sH.get(x) - 1);
  }
  return answer;
}

// let str1 = "AbaAeCe";
// let str2 = "baeeACA";
let str1 = "abaCC";
let str2 = "Caaab";
console.log(solution(str1, str2));
