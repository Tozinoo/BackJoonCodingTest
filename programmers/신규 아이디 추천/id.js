function solution(new_id) {
    let newId = new_id.toLowerCase();
    newId = newId.replace(/[^\w-._]+/g, "");
    let answer = "";
    for (let i = 0; i < newId.length; i++) {
        if (newId[i] !== newId[i + 1]) answer += newId[i];
    }

    if (answer[0] === ".") answer = answer.replace(answer[0], "");

    if (answer[answer.length - 1] === ".")
        answer = answer.replace(answer[answer.length - 1], "");

    if (answer === null || answer === "") answer = "a";

    if (answer.length >= 16) {
        answer = answer.substring(0, 15);
        console.log(answer);
        console.log(answer[14]);
        if (answer[14] === ".")
            answer = answer.replace(answer[answer.length - 1], "");
    }

    const b = answer;
    while (answer.length < 3) {
        answer = answer + b[b.length - 1];
    }
    console.log(answer);
    return answer;
}

solution("...!@BaT#*..y.abcdefghijklm");
