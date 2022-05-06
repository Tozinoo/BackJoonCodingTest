function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    const minRank = lottos.filter((v) => win_nums.includes(v)).length;
    const maxRank = lottos.filter((v) => v === 0).length + minRank;

    return [rank[maxRank], rank[minRank]];
}
