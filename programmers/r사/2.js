function solution(num) {
    let jjak = [];
    for (var i = 0; i < num; i++) {
        var str = "" + (i + 1); // str에 3,6,9 숫자 넣기
        for (var j = 0; j < str.length; j++) {
            // 문자열 길이 만큼 for문
            if (str[j] == 3 || str[j] == 6 || str[j] == 9) {
                // 문자열에 3, 6, 9가 있을 시 실행
                str = "짝";
                jjak.push("짝");
            }
        }
    }
    var answer = jjak.length;
    return answer;
}

console.log(solution(33));
