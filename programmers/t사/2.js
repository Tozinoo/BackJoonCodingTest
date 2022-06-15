function solution(line1, line2) {
    let answer = 0;
    let n = Math.floor((line1.length - 3) / 2);
    let regExp;
    n;
    for (let i = 0; i <= n; i++) {
        if (i === 0) {
            regExp = new RegExp(`${line2}`, "gi");
        } else {
            let str = "";
            for (const key in line2) {
                str += line2[key] + ".".repeat(i);
            }
            str;
            str = str.substring(0, 2 * i + 3);

            regExp = new RegExp(`${str}`, "gi");
        }
        if (line1.match(regExp) !== null) {
            answer += line1.match(regExp).length;
        }
        console.log();
        answer;

        let test2 = line1.match(new RegExp(regExp, "gi"));
        test2;
        console.log(line2[i] * line2.length);
        // let regExp = new RegExp(`${line2}`, "g");
    }
    let b = [...line1.matchAll(/b.b.b/gi)];
    b;
    console.log([...b]);
    console.log(b);

    let regExp2 = new RegExp(`b.b.b`, "g");

    let test3 = line1.match(regExp2);

    test3;

    console.log(line1.match(line2));

    console.log(line1.length - line2.length + 1);

    for (const v in line1) {
        v;
        console.log(line1[v]);
        if (line1[v] === line2) answer++;
    }
    answer;

    return answer;
}

// 3n + 2;

console.log(solution("abbbcbbb", "bbb"));
//console.log(solution("abcabcabc", "abc"));
// console.log("abacaba", "acb");
