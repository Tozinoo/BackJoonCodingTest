function solution(S, arr) {
  let queue = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < queue.length; j++) {
      if (arr[i] === queue[j]) {
        queue;
        [queue[queue.length - 1], queue[j]] = [
          queue[j],
          queue[queue.length - 1],
        ];
        queue;
        queue.pop();
      }
    }
    queue.unshift(arr[i]);
    queue;
    if (queue.length > S) {
      queue.pop();
    }
  }

  return queue;
}

let S = 5;
let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(S, arr));
