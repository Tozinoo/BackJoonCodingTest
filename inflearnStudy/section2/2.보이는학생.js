function solution(arr) {
  let answer = 0;
  let taller = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > taller) {
      answer++;
      taller = arr[i];
    }
  }

  return answer + 1;
}

console.log(solution([130, 135, 148, 140, 145, 150, 143, 150, 153, 160]));
