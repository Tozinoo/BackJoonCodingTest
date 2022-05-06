function solution(s) {
    let strings = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let answer = s;
    for (let i = 0; i < strings.length; i++) {
        let arr = answer.split(strings[i]);
        console.log(i, arr);

        answer = arr.join(i);
        console.log(i, answer);
    }
    console.log(answer);

    return answer;
}

solution("one4seveneightnine");
