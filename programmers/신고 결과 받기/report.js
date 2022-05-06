function solution(id_list, report, k) {
    const setReport = [...new Set(report)].map((v) => v.split(" "));
    console.log(setReport);

    let reportedCnt;
    let reporting;
    let userReport = {}; // 신고한 리스트

    let answer = [];

    reportedCnt = id_list.map((v) => {
        return setReport.filter((id) => id[1] === v).length;
    });
    console.log(reportedCnt);
    let isBanned = {};
    id_list.forEach((id) => {
        userReport[id] = 0;
        isBanned[id] = Math.floor(
            setReport.filter((user) => user == id).length / k
        )
            ? true
            : false;
    });

    console.log(userReport);
    console.log(isBanned);

    console.log(setReport[0]);
    for (let i = 0; i < setReport.length; i++) {
        const element = array[i];
    }

    return answer;
}

solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
);
// solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3);
