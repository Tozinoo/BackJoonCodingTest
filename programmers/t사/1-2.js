function solution(mapStr) {
  let wide = 0;
  let mapArr = [];
  mapStr.map((line) => {
    mapArr.push(String(line).split(""));
  });

  mapArr;

  let cnt = 0;
  mapArr.forEach((line, i) => {
    line;
    i;
    line.forEach((item, j) => {
      if (item === "0") {
        cnt++;
        destroyConnected(i, j);
      }
    });
  });

  const dfs = () => {};

  function destroyConnected(in1, in2) {
    mapArr[in1][in2] = "0";
    if (in1 > 0) {
      if (mapArr[in1 - 1][in2] === "1") {
        destroyConnected(in1 - 1, in2);
      }
    }
    if (in2 > 0) {
      if (mapArr[in1][in2 - 1] === "1") {
        destroyConnected(in1, in2 - 1);
      }
    }
    if (in1 < mapArr.length - 1) {
      if (mapArr[in1 + 1][in2] === "1") {
        destroyConnected(in1 + 1, in2);
      }
    }
    if (in1 < mapArr[in1].length - 1) {
      if (mapArr[in1][in2 + 1] === "1") {
        destroyConnected(in1, in2 + 1);
      }
    }
  }
  return cnt;
}

let arr = [
  ["1101110000"],
  ["1100001000"],
  ["1000011000"],
  ["0000000000"],
  ["0000100100"],
  ["1110101111"],
];
let arr1 = [["111"], ["001"], ["000"], ["100"]];
let arr2 = [["1000011"], ["1100001"], ["0000000"], ["1110111"]];
let arr3 = [["111"], ["101"], ["111"]];
console.log(solution(arr));
