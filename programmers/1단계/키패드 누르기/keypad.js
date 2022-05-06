function solution(numbers, hand) {
    const arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        ["*", 0, "#"],
    ];
    let leftHand = "*";
    let rightHand = "#";

    let answer = [];

    const getDistance = (start, end) => {
        let a;
        let b;
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (start === arr[i][j]) a = [i, j];
                if (end === arr[i][j]) b = [i, j];
            }
        }

        console.log(a);
        console.log(b);
        return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
    };
    console.log(getDistance(8, 2));
    console.log(getDistance(0, 2));

    numbers.map((v) => {
        if (v % 3 === 1) {
            answer.push("L");
            leftHand = v;
        } else if (v % 3 === 0 && v !== 0) {
            answer.push("R");
            rightHand = v;
        } else {
            if (getDistance(leftHand, v) > getDistance(rightHand, v)) {
                answer.push("R");
                rightHand = v;
            } else if (getDistance(leftHand, v) < getDistance(rightHand, v)) {
                answer.push("L");
                leftHand = v;
            } else {
                if (hand === "left") {
                    answer.push("L");
                    leftHand = v;
                } else {
                    answer.push("R");
                    rightHand = v;
                }
            }
        }
    });
    answer = answer.join("");
    answer;

    return answer;
}
