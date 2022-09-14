function solution(str, t) {
  let answer = 0;
  let tmap = new Map();
  let temparr = [];
  for (let i = 0; i < t.length; i++) {
    tmap.set(t[i], tmap.has(t[i]) ? tmap.get(t[i]) + 1 : 1);
  }

  for (let i = 0; i < str.length - 2; i++) {
    let tmp = "";
    for (let j = 0; j < t.length; j++) {
      tmp += str[i + j];
    }
    temparr.push(tmp);
  }
  temparr;

  for (let i = 0; i < temparr.length; i++) {
    let ttmap = new Map();
    for (let j = 0; j < t.length; j++) {
      ttmap.set(
        temparr[i][j],
        ttmap.has(temparr[i][j]) ? ttmap.get(temparr[i][j]) + 1 : 1
      );
    }
    JSON.stringify([...ttmap.entries()].sort()) ==
      JSON.stringify([...tmap.entries()].sort()) && answer++;
  }

  return answer;
}

let str = "bacaAacba";
console.log(solution(str, "abc"));
