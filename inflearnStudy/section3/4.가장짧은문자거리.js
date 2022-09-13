function solution(str, t) {
  let idx1 = str.length;
  let idx2 = str.length;

  let repeat1 = [];
  let repeat2 = [];

  let answer = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === t) {
      idx1 = 0;
      answer.push(idx1);
    } else {
      idx1++;
      answer.push(idx1);
    }
  }

  for (let j = str.length - 1; j >= 0; j--) {
    console.log(str[j]);
    if (str[j] === t) {
      idx2 = 0;
      repeat2.push(idx2);
    } else {
      idx2++;
      // repeat2.push(idx2);
      answer[j] = Math.min(answer[j], idx2);
    }
  }
  repeat2 = repeat2.reverse();

  // for (let i = 0; i < str.length; i++) {
  //   if (repeat1[i] <= repeat2[i]) {
  //     answer.push(repeat1[i]);
  //   } else {
  //     answer.push(repeat2[i]);
  //   }
  // }

  return answer;
}

console.log(solution("teachermode", "e"));
