function solution(s) {
    s;
    console.log(s.length);
    let tempString;
    for (let i = 0; i < s.length; i++) {
        tempString = s.split(`${s[i]}`);
    }
    tempString;
    var answer = 0;
    return answer;
}

solution("aabbaccc");
