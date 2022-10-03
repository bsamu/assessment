const digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const tenXs = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const xTen = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const names = ["hundred", "thousand", "million"];
const others = ["minus", "-", "and", "point"];

function numToWords(input) {
    if (typeof (input) !== "number") return "Invalid input, Not-a-Number!";

    let num;
    let output = "";

    if (input.toString().indexOf("-") !== -1) {
        num = Math.abs(input).toString();
        output = others[0];
    } else {
        num = input.toString();
    }

    const numLength = num.length;
    if (numLength > 9) return "Too big number!";

    for (let i = 0; i < numLength; i++) {
        output += " ";
        if (numLength - i === 4 && num[i] == 1) {
            output += tenXs[Number(num[i + 1])] + " " + names[0];
            i += 2;
            console.log(num[i], num[i + 1], "line 39")
            if (num[numLength - i - 2] == 0 && num[numLength - i - 3] == 0) {
                return output;
            }
            if (num[numLength - i] == 1) {
                output += " " + others[2] + " " + tenXs[Number(num[i + 1])];
            } else if (num[numLength - i] != 0) {
                if (num[numLength - i] != 0) {
                    output += " " + others[2] + " " + xTen[Number(num[i])];
                }
                if ((num[numLength - i] != 0)) {
                    output += "-" + digits[Number(num[i])];
                }
            } else if (num[numLength - i] == 0) {
                output += " " + others[2] + " " + digits[Number(num[i + 1])];
            }
        }
    }
    return output.trim();
}

numToWords(123456719);
console.log(numToWords(123456719));
console.log(numToWords(-119));
console.log(numToWords(-1149));
console.log(numToWords(-1100));
console.log(numToWords(-1115));
console.log(numToWords(-1109));
