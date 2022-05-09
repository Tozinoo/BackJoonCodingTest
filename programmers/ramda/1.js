function solution(num) {
    let i = num;
    let numSplit = String(num).split(""); // 숫자 배열로 변환

    if (numSplit.length % 2 === 1) {
        // 숫자 홀수 일 시 짝수로 변경
        num = 10 ** numSplit.length;
    }

    while (true) {
        num = String(i).split(""); // 숫자 배열로 변환
        let frontNum = num.slice(0, num.length / 2); // 앞 숫자 갯수 나누기
        let backNum = num.slice(num.length / 2, num.length); // 뒷 숫자 갯수 나누기
        frontNum = frontNum.reduce((p, c) => {
            return parseInt(p) * parseInt(c);
        }); // 앞 숫자들 곱하기
        backNum = backNum.reduce((p, c) => {
            return parseInt(p) * parseInt(c);
        }); // 뒷 숫자들 곱하기
        if (frontNum === backNum) break; // 조건 맞을 시 break;
        i++;
    }
    let answer = i;
    answer;
    return answer;
}

solution(7778);
