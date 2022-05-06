function solution(numbers, hand) {
    let leftHand = "*";
    let rightHand = "#";

    let answer = [];

    const getDistance = (start, end) => {
        const keyPad = {
            1: [0, 0],
            2: [0, 1],
            3: [0, 2],
            4: [1, 0],
            5: [1, 1],
            6: [1, 2],
            7: [2, 0],
            8: [2, 1],
            9: [2, 2],
            "*": [3, 0],
            0: [3, 1],
            "#": [3, 2],
        };

        const nowPosition = keyPad[start];
        const targetPosition = keyPad[end];

        return (
            Math.abs(targetPosition[0] - nowPosition[0]) +
            Math.abs(targetPosition[1] - nowPosition[1])
        );
    };

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
