function solution(line1, line2) {
    let answer = 0;
    let n = Math.floor((line1.length - 3) / 2);
    n;
    let regExp;

    for (let i = 0; i <= n; i++) {
        let str = "";
        let line1Index = 0;
        let line1String = line1;

        for (const key in line2) {
            str += line2[key] + ".".repeat(i);
        }
        str = str.substring(0, i * (line2.length - 1) + line2.length);

        regExp = new RegExp(`${str}`);

        do {
            let findString = line1String.match(regExp);
            if (findString) {
                line1String = line1String.substr(findString.index + 1);
                answer += 1;
            }
            line1Index++;
        } while (line1Index < line1.length);
    }

    return answer;
}

console.log(solution("abbbbbcbbbb", "bbb"));
// console.log(solution("abcabcabc", "abc"));
// console.log(solution("abacaba", "acb"));
