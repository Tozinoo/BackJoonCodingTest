function solution(participant, completion) {
    let participants = participant.sort();
    let completions = completion.sort();

    for (let i = 0; i < participant.length; i++) {
        if (participants[i] !== completions[i]) {
            return participants[i];
        }
    }
}

console.log(
    solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);
