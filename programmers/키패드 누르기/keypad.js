function solution(numbers, hand) {
    const arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        ["*", 0, "#"],
    ];

    let leftHand = "*";
    let rightHand = "#";

    let leftDistance;
    let rightDistance;

    let answer = [];

    numbers.map((v) => {
        if (v === 1 || v === 4 || v == 7) {
            answer.push("L");
            leftHand = v;
        }
        if (v === 3 || v === 6 || v == 9) {
            answer.push("R");
            rightHand = v;
        }
    });
    console.log(answer);
    console.log(leftHand);
    console.log(rightHand);
    return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
