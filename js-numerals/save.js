const digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const tenXs = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const xTen = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const names = ["hundred", "thousand", "million"];
const others = ["minus", "-", "and", "point"];

function subArrayMaker(num) {
    const helper = num.split("").reverse();
    const arr = [];
    for (let i = 0; i < helper.length;) {
        arr.push(helper.slice(i, i += 3));
    }
    arr.map(e => e.reverse())
    arr.reverse();
    return arr;
}

function numToWords(input) {
    console.log("----------")
    if (typeof (input) !== "number") return "Invalid input, Not-a-Number!";
    if (input === 0) return digits[0];

    let num;
    const result = [];
    let output = "";
    let temp = [];

    if (input.toString().indexOf("-") !== -1) {
        num = Math.abs(input).toString();
        output = others[0];
        result.push(others[0]);
    } else {
        num = input.toString();
    }


    const numLength = num.length;
    const arr = subArrayMaker(num);
    console.log(arr)
    if (numLength > 7) return "Too big number!";

    for (let i = 0; i < numLength; i++) {
        if (numLength === 7 && i === 0) {
            arr.push(digits[Number(num[0])])
        }
    }
    return output.trim();
}

// const fiveLong = 12345;
// const perc = fiveLong % 3;
// const thousandProbe = 1e3;
// numToWords(123456719);
// console.log(numToWords(123456719));
// console.log(numToWords(-119));
// console.log(numToWords(-1149));
// console.log(numToWords(-1100));
// console.log(numToWords(-1115));
console.log(numToWords(2115345));
// console.log(numToWords(-1109));
// console.log(numToWords(thousandProbe));
// console.log(thousandProbe.toString())
// console.log(thousandProbe.toString().length);
// console.log(typeof (fiveLong))
// console.log(perc);
// console.log(1234 % 3);
