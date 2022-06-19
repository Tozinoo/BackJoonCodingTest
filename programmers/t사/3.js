function solution(paper, n) {
    let setArray = paper;
    if (n !== 0) {
        switch (n) {
            case 1:
                setArray = fold(setArray);
                break;
            case 2:
                setArray = fold(setArray);
                setArray.forEach((e) => {
                    let b = fold(e);
                    for (let i = 0; i < b.length; i++) {
                        setArray.push(b[i]);
                    }
                });
                break;
            case 3:
                setArray = fold(setArray);
                let nN = setArray.length;
                setArray.forEach((e) => {
                    let b = fold(e);
                    for (let i = 0; i < b.length; i++) {
                        setArray.push(b[i]);
                    }
                });
                setArray.forEach((e, i) => {
                    if (i >= nN) {
                        let c = fold(e);
                        for (let i = 0; i < c.length; i++) {
                            setArray.push(c[i]);
                        }
                    }
                });
                break;
            case 4:
                setArray = fold(setArray);

                let nNN = setArray.length;

                setArray.forEach((e) => {
                    let b = fold(e);
                    for (let i = 0; i < b.length; i++) {
                        setArray.push(b[i]);
                    }
                });
                let nNNN = setArray.length;

                setArray.forEach((e, i) => {
                    if (i >= nNN) {
                        let c = fold(e);
                        for (let i = 0; i < c.length; i++) {
                            setArray.push(c[i]);
                        }
                    }
                });
                setArray.forEach((e, i) => {
                    if (i >= nNNN) {
                        let d = fold(e);
                        for (let i = 0; i < d.length; i++) {
                            setArray.push(d[i]);
                        }
                    }
                });

                break;
            default:
                break;
        }
    }

    return Math.max(...setArray.flat());
}

const fold = (array) => {
    let tempA = [];
    const arrayLen = array.length;

    const center = Math.floor(parseFloat(arrayLen / 2));

    let step = 0;

    for (let i = 0; i < arrayLen; i++) {
        let tempB = [];
        if (arrayLen % 2 === 0) {
            if (i >= center) {
                step--;
            } else {
                step++;
            }
        } else {
            if (i < center) {
                step++;
            } else if (i === center) {
                step = step;
            } else {
                step--;
            }
        }
        for (let j = 0; j < step; j++) {
            tempB.push(array[i - j] + array[i + 1 + j]);
        }
        for (let j = step * 2; j < arrayLen; j++) {
            if (i >= center) {
                tempB.push(array[arrayLen - j - 1]);
            } else {
                tempB.push(array[j]);
            }
        }
        tempA.push(tempB);
    }
    tempA.pop();
    return tempA;
};
/*
fold([71, 53, 35, -22, 19, 75, 88, -14])

[124, 35, -22, 19, 75, 88, -14]
[88, 49, 19, 75, 88, -14]
[13, 72, 146, 88, -14]
[-3, 110, 141, 57]
[94, 66, 21, 53, 71]
[163, 5, -22, 35, 53, 71]
[74, 75, 19, -22, 35, 53, 71]

[array[0]+array[1], array[2], array[3], array[4], array[5], array[6], array[7]]    1
[array[1]+array[2], array[0]+array[3], array[4], array[5], array[6], array[7]]     2
[array[2]+array[3], array[1]+array[4], array[0]+array[5], array[6], array[7]]      3
[array[3]+array[4], array[2]+array[5], array[1]+array[6], array[0]+array[7]]       4
[array[4]+array[5], array[3]+array[6], array[2]+array[7], array[1], array[0]]      3
[array[5]+array[6], array[4]+array[7], array[3], array[2], array[1], array[0]]     2
[array[6]+array[7], array[5], array[4], array[3], array[2], array[1], array[0]]    1


tempB.push(array[i] + array[i + j * 2 + 1]);

[10, 5, -2, 9]
[8, 5, 9]
[3, 12, 7]
[7, 5, 3, 7]

[array[0]+array[1], array[2], array[3], array[4]]     1 
[array[1]+array[2], array[0]+array[3], array[4]]]     2
[array[2]+array[3], array[1]+array[4], array[0]]      2
[array[3]+array[4], array[2], array[1], array[0]]     1

*/
//                0   1   2    3   4   5   6    7
// console.log(fold2([71, 53, 35, -22, 19, 75, 88, -14]));
// console.log(fold([71, 53, 35, -22, 19, 75, 88, -14]));
// 3번 접을 수 있음
// console.log(solution([7, 3, 5, -2, 9], 4));
// console.log(solution([10, -10], 1));
console.log(solution([7, 3, -7, 5, -3, 11, 10, 22, 33, 62], 4));
