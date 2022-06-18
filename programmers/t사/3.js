function solution(paper, n) {
    let setArray = paper;

    if (n !== 0) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < Math.ceil(paper.length / 2); j++) {}
        }
    }

    return Math.max(...setArray);
}

const fold = (array) => {
    let tempA = [];
    for (let i = 0; i < array.length - 1; i++) {
        i;
        for (let j = 0; j < Math.floor((array.length - i) / 2); j++) {
            tempA.push(array[i] + array[i + j * 2 + 1]);
        }
        let b = [array[i] + array[i + 1]];
        let c = [array[i] + array[i + 3]];
        let d = [array[i] + array[i + 5]];
        let e = [array[i] + array[i + 7]];
        b;
        c;
        d;
        e;
    }
    tempA;
};
/*
[124, 35, -22, 19, 75, 88, -14]
[88, 49, 19, 75, 88, -14]
[13, 72, 146, 88, -14]
[-3, 110, 141, 57]
[94, 66, 21, 53, 71]
[163, 5, -22, 35, 53, 71]
[74, 75, 19, -22, 35, 53, 71]

//tempB.push(array[i] + array[i + j * 2 + 1]);
[array[0]+array[1], array[2], array[3], array[4], array[5], array[6], array[7]]
[array[1]+array[2], array[0]+array[3], array[4], array[5], array[6], array[7]]
[array[2]+array[3], array[1]+array[4], array[0]+array[5], array[6], array[7]]
[array[3]+array[4], array[2]+array[5], array[1]+array[6], array[0]+array[7]]
[array[4]+array[5], array[3]+array[6], array[2]+array[7], array[1], array[0]]
[array[5]+array[6], array[4]+array[7], array[3], array[2], array[1], array[0]]
[array[6]+array[7], array[5], array[4], array[3], array[2], array[1], array[0]]
*/
//                0   1   2    3   4   5   6    7
console.log(fold([71, 53, 35, -22, 19, 75, 88, -14]));
// 3번 접을 수 있음
console.log(solution([7, 3, 5, -2, 9], 1));
// console.log(solution([10, -10], 1));
// console.log(solution([7, 3, -7, 5, -3], 2));
