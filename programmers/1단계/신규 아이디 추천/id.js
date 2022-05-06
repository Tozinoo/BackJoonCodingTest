function solution(new_id) {
    let newId = new_id.toLowerCase(); //step 1
    newId = newId.replace(/[^\w-._]+/g, ""); // step 2
    let answer = newId; // step 3

    answer = answer.replace(/\.+/g, ".").replace(/^\.|\.$/, ""); // step 3, step 4

    if (answer === null || answer === "") answer = "a";

    answer = answer.slice(0, 15).replace(/\.$/, "");

    if (answer.length === 1) answer = answer[0].repeat(3);
    if (answer.length === 2) answer = answer + answer[1];
    return answer;
}

solution("...!@BaT#*..y.abcdefghijklm");
