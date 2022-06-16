function solution(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) {
        console.log(Math.sqrt(i));
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    answer;
    return answer;
}

console.log(solution(13, 17));
