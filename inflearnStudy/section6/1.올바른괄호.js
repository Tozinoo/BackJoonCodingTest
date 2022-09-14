function solution(str) {
    let stack = [];
    for (const x of str) {
        if (x === "(") stack.push("(");
        else stack.pop();
    }

    return stack.length === 0 ? "YES" : "NO";
}

let str = "(())()";
console.log(solution(str));
