function solution(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) {
        if (getMeasure(i).length % 2 === 0) answer += i;
        else answer -= i;
    }
    return answer;
}

const getMeasure = (n) => {
    let i = 1;
    let result = [];
    while (i <= n) {
        if (n % i == 0) {
            result.push(i);
        }
        i++;
    }
    return result;
};

console.log(solution(13, 17));
