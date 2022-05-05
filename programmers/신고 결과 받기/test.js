function solution(id_list, report, k) {
    let reports = [...new Set(report)].map((a) => {
        return a.split(" ");
    });

    let counts = new Map();

    for (const bad of reports) {
        console.log("key", bad[1]);
        console.log("value", counts.get(bad[1]) + 1 || 1);
        counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
    }

    let good = new Map();
    for (const report of reports) {
        console.log("reports", reports);
        if (counts.get(report[1]) >= k) {
            good.set(report[0], good.get(report[0]) + 1 || 1);
        }
    }
    console.log("good", good);
    let answer = id_list.map((a) => good.get(a) || 0);
    return answer;
}

// console.log(
//     solution(
//         ["muzi", "frodo", "apeach", "neo"],
//         ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
//         2
//     )
// );
// console.log(
//     solution(
//         ["con", "ryan"],
//         ["ryan con", "ryan con", "ryan con", "ryan con"],
//         2
//     )
// );
// let recipeMap = new Map([
//     ["cucumber", 500],
//     ["tomatoes", 350],
//     ["onion", 50],
// ]);

// for (let vegetable of recipeMap.keys()) {
//     console.log(vegetable); // cucumber, tomatoes, onion
// }

// var iterable = [3, 5, 7];
// iterable.foo = "hello";
// iterable.foo2 = "hello2";

// for (var key in iterable) {
//     console.log(key); // 0, 1, 2, "foo", "arrCustom", "objCustom"
// }

// for (var value of iterable) {
//     console.log(value); // 3, 5, 7
// }

// const arr = ["banana", "b", "Boy"];
// console.log(
//     arr.sort((a, b) => {
//         const upperCaseA = a.toUpperCase();
//         const upperCaseB = b.toUpperCase();
//         if (upperCaseA > upperCaseB) return 1;
//         if (upperCaseA < upperCaseB) return -1;
//         if (upperCaseA === upperCaseB) return 0;
//     })
// ); // b, banana, Boy
// console.log(
//     arr.sort((a, b) => {
//         const upperCaseA = a.toUpperCase();
//         const upperCaseB = b.toUpperCase();
//         if (upperCaseA < upperCaseB) return 1;
//         if (upperCaseA > upperCaseB) return -1;
//         if (upperCaseA === upperCaseB) return 0;
//     })
// ); // Boy, banana, b

// const arr = [
//     { name: "banana", price: 3000 },
//     { name: "apple", price: 1000 },
//     { name: "orange", price: 500 },
// ];
// // ! 오름차순
// console.log(arr.sort((a, b) => a.price - b.price));
// // [
// //     { name: "orange", price: 500 },
// //     { name: "apple", price: 1000 },
// //     { name: "banana", price: 3000 },
// // ];
// // ! 내림차순
// console.log(arr.sort((a, b) => b.price - a.price));
// [
//     { name: 'banana', price: 3000 },
//     { name: 'apple', price: 1000 },
//     { name: 'orange', price: 500 }
// ]
