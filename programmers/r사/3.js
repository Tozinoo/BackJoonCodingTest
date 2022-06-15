function solution(waiting) {
    var answer = Array.from(new Set(waiting)); // 중복 제거
    return answer;
}

console.log(solution([1, 5, 8, 2, 10, 5, 4, 6, 4, 8]));
