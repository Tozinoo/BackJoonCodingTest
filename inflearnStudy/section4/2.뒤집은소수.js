function solution(arr) {
  let answer = "";
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i].toString().split("").reverse().join(""));
  }

  for (let i = 0; i < arr.length; i++) {
    if (isPrimeNumber(arr[i])) {
      answer += arr[i] + " ";
    }
  }
  return answer;
}

function isPrimeNumber(n) {
  if (n == 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
