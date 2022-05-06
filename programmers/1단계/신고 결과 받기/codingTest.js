function solution(id_list, report, k) {
    const reportSet = new Set(report);
    const reportedCount = {};
    const reportedBy = {};
    const mailCount = {};

    id_list.forEach((v) => {
        reportedCount[v] = 0;
        mailCount[v] = 0;
        reportedBy[v] = [];
    });

    reportSet.forEach((v) => {
        const [id, reported] = v.split(" ");
        reportedCount[reported] += 1;
        reportedBy[reported].push(id);
    });

    for (const reportedId in reportedCount) {
        if (reportedCount[reportedId] >= k) {
            reportedBy[reportedId].forEach((reporter) => {
                mailCount[reporter] += 1;
            });
        }
    }

    return id_list.map((id) => mailCount[id]);
}

console.log(
    solution(
        ["muzi", "frodo", "apeach", "neo"],
        ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
        2
    )
);
console.log(
    solution(
        ["con", "ryan"],
        ["ryan con", "ryan con", "ryan con", "ryan con"],
        2
    )
);
