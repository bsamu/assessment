const digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const tenXs = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const xTen = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const names = ["hundred", "thousand", "million"];
const others = ["minus", "-", "and", "point"];

function numToWords(input) {
    console.log("----------")
    if (typeof (input) !== "number") return "Invalid input, Not-a-Number!";

    let num;
    let output = "";

    // if (input !== Math.abs(input)) {
    //     isNegative = 1;
    //     num = Math.abs(input).toString();
    // } else {
    //     num = input.toString();
    // }


    if (input.toString().indexOf("-") !== -1) {
        num = Math.abs(input).toString();
        output = others[0];
    } else {
        num = input.toString();
    }

    const numLength = num.length;
    if (numLength > 9) return "Too big number!";

    // for (let i = numLength - 1; i >= 6; i--) {
    for (let i = 0; i < numLength; i++) {
        output = " " + output;
        // console.log("--------");
        if (numLength - i === 2) {
            console.log("Yolo")
            if (num[i] == 1) {
                output += tenXs[Number(num[i + 1])];
                return output;
            } else if (num[i] != 0) {
                output += xTen[Number()]
            }
        }
        // console.log(i >= numLength - 2)
        // console.log(Number(num[i]) === 1)
        // console.log(i >= numLength - 2 && num[i] == 1)
        // console.log("--------")
        // console.log(num[i]);
        // output = digits[Number(num[i])] + output;
    }
    // console.log(output);
    return output;
}

numToWords(123456719);
console.log(numToWords(123456719));
console.log(numToWords(-119));
console.log(numToWords(-149));
