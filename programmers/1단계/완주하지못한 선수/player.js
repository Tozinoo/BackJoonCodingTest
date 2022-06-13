// function solution(participant, completion) {
//     let completions = completion;
//     for (let i = 0; i < completion.length; i++) {
//         participant.includes(completions[completions.length - 1]);
//         completions.pop();
//     }
//     return participant[num];
// }

var solution = (participant, completion) => {
    return participant.find(
        (name) => {
            console.log(!completion[name]--);
            return !completion[name]--;
        },
        completion.map((name) => {
            completion[name] = (completion[name] | 0) + 1;
        })
    );
};

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));

// console.log(
//     solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
// );
