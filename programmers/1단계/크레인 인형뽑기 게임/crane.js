function solution(board, moves) {
    let basket = [];
    let boards = board;
    let answer = 0;

    moves.map((v) => {
        for (let i = 0; i < boards.length; i++) {
            if (boards[i][v - 1] === 0) {
                continue;
            }
            let pushItem = boards[i][v - 1];
            pushItem;
            if (basket.length === 0) {
                basket.push(pushItem);
            } else if (
                basket.length >= 1 &&
                basket[basket.length - 1] !== pushItem
            ) {
                basket.push(pushItem);
            } else {
                basket.pop();
                answer += 2;
            }
            boards[i][v - 1] = 0;
            break;
        }
    });

    return answer;
}

solution(
    [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 3],
        [0, 2, 5, 0, 1],
        [4, 2, 4, 4, 2],
        [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
);

4311324;
