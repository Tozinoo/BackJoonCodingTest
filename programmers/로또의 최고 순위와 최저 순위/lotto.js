function solution(lottos, win_nums) {
    const sortLottos = lottos.sort((a, b) => a - b);
    const sortWinNums = win_nums.sort((a, b) => a - b);
    let zeroNums = lottos.filter((e) => 0 === e).length;
    let winNums = 0;
    for (let i = 0; i < sortLottos.length; i++) {
        const result = binarySearch(sortWinNums, sortLottos[i]);
        if (result !== -1) {
            winNums++;
        }
    }
    const finalResult = winNums + zeroNums;
    console.log("winNums", winNums);
    console.log("finalResult", finalResult);
    const a = (num) => {
        switch (num) {
            case 6:
                return 1;
            case 5:
                return 2;
            case 4:
                return 3;
            case 3:
                return 4;
            case 2:
                return 5;
            default:
                return 6;
        }
    };
    var answer = [a(finalResult), a(winNums)];
    return answer;
}
const binarySearch = function (arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let mid;

    while (start <= end) {
        mid = parseInt((start + end) / 2);

        if (target === arr[mid]) {
            return mid;
        } else {
            if (target < arr[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
    }
    return -1;
};
