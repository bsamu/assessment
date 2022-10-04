// const arr = [[1, 2], [3, 4], [5, 6]];
// console.log(arr, "Line 2");
// console.log(arr.reverse(), "Line 3");
// console.log(arr, "Line 4");

// arr.map(e => {
//     e.reverse();
// });

// console.log(arr, "Line 10");
// arr.map(e => {
//     console.log(e, "Line 12");
// });
// console.log(arr, "Line 14");

function subArrayMaker(num) {
    const helper = num.toString().split("").reverse();
    const arr = [];
    for (let i = 0; i < helper.length;) {
        arr.push(helper.slice(i, i += 3));
    }
    arr.map(e => e.reverse())
    arr.reverse();
    return arr;
}

console.log(subArrayMaker(12345678));