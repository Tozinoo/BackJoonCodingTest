function solution(nums) {
    let newNum = Array.from(new Set(nums));
    return nums.length / 2 <= newNum.length ? nums.length / 2 : newNum.length;
}

console.log(solution([3, 3, 3, 2, 2, 4]));
