const digits = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const decimals = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const tenXs = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const xTen = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const names = ["hundred", "thousand", "million"];
const others = ["minus", "-", "and", "point"];

function fourDigits(input, given) {
    let num = input;
    let output = given;

    if (num[0] == 1) {
        output += tenXs[Number(num[1])] + " " + names[0];
        if (num[2] == 0 && num[3] == 0) {
            return output.trim();
        }
        if (num[2] == 1) {
            output += " " + others[2] + " " + tenXs[Number(num[3])];
        } else if (num[2] != 0) {
            if (num[2] != 0) {
                output += " " + others[2] + " " + xTen[Number(num[2])];
            }
            if (num[3] != 0) {
                output += "-" + digits[Number(num[3])];
            }
        } else if (num[2] == 0 && num[3] != 0) {
            output += " " + others[2] + " " + digits[Number(num[3])];
        }
    }

    if (Number(num[0]) > 1) {
        output += digits[Number(num[0])] + " " + names[1];
        if (num[1] != 0) {
            output += " " + digits[Number(num[1])] + " " + names[0];
        }
        if (num[2] != 0 || num[3] != 0) {
            output += " " + others[2] + " "; // adding "and"
        }
        if (num[2] == 1) {
            output += tenXs[Number(num[3])];
        } else if (Number(num[2]) > 1) {
            output += xTen[Number(num[2])];
            if (num[3] != 0) {
                output += others[1] + digits[Number(num[3])];
            }
        } else if (num[2] == 0 && num[3] != 0) {
            output += " " + digits[Number(num[3])];;
        }
    }
    return output.replace("  ", " ").trim();
}

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

function occurence(given) {
    let result = 0;
    for (let i = 0; i < 2; i++) {
        if (given[i] == 0)
            result++;
    }
    return result;
}

function hundred(given) {
    let temp = "";
    if (given[0] != 0) {
        temp += digits[Number(given[0])] + " " + names[0];
    }

    if (given[1] == 0 && given[2] == 0) {
        return temp.trim();
    }
    if (given[1] == 1) {
        temp += " " + others[2] + " " + tenXs[Number(given[2])];
    } else if (given[1] != 0) {
        temp += " " + others[2] + " " + xTen[Number(given[1])];
        if (given[2] != 0) {
            temp += "-" + digits[Number(given[2])];
        }
    } else if (given[1] == 0 && given[3] != 0) {
        temp += " " + others[2] + " " + digits[Number(given[2])];
    }
    return temp.trim();
}

function numToWords(input) {
    console.log("----------")
    if (typeof (input) !== "number") return "Invalid input, Not-a-Number!";
    if (input === 0) return digits[0];

    let num;
    const result = [];
    let output = "";

    if (Math.floor(input).toString().indexOf("-") !== -1) {
        num = Math.abs(input).toString();
        output = others[0] + " ";
        result.push(others[0]);
    } else {
        num = input.toString();
    }

    const numLength = num.length;
    if (numLength > 7) return "Too big number!";

    if (numLength === 4) return fourDigits(num, output); // 4 digit solution

    const arr = subArrayMaker(num);
    const arrLength = arr.length;

    if (arrLength === 3) {
        output += digits[Number(num[0])] + " " + names[2];
        if (occurence(arr[1]) < 3) {
            output += " " + hundred(arr[1].join("")) + " " + names[1];
        }
        if (occurence(arr[2]) < 3) {
            output += " " + hundred(arr[2].join(""));
        }
    }

    if (arrLength === 2) {
        if (occurence(arr[0]) < 3 && arr[0].length === 3) {
            output += " " + hundred(arr[0].join("")) + " " + names[1];
        }

        if (occurence(arr[0]) < 2 && arr[0].length === 2) {
            if (arr[0][0] == 1) {
                output += " " + tenXs[Number(arr[0][1])] + " " + names[1];
            } else if (arr[0][0] != 0) {
                output += " " + others[2] + " " + xTen[Number(arr[0][0])];
                if (arr[0][1] != 0) {
                    output += "-" + digits[Number(arr[0][1])];
                }
            } else if (arr[0][0] == 0 && arr[0][1] != 0) {
                output += " " + digits[Number(arr[0][1])];
            }
        }

        if (occurence(arr[1]) < 3) {
            output += " " + hundred(arr[1].join(""));
        }
    }

    if (arrLength === 1 && arr[0].length === 3) {
        output += digits[arr[0][0]]
    }

    if (arrLength === 1 && arr[0].length === 2) {
        if (arr[0][0] == 1) {
            output += tenXs[Number(num[1])] + " " + names[0];
        }

        if (Number(num[0]) > 1) {
            if (num[0] == 1) {
                output += tenXs[Number(num[1])];
            } else if (Number(num[0]) > 1) {
                output += xTen[Number(num[0])];
                if (num[1] != 0) {
                    output += others[1] + digits[Number(num[1])];
                }
            } else if (num[0] == 0 && num[1] != 0) {
                output += " " + digits[Number(num[1])];;
            }
        }
    }

    if (arrLength === 1 && arr[0].length === 1) {
        output += digits[Number(arr[0][0])]
    }

    return output.replace("  ", " ").trim();
}

console.log(numToWords(7));
console.log(numToWords(42));
console.log(numToWords(1999));
console.log(numToWords(2001));
console.log(numToWords(17999));
console.log(numToWords(100001));
console.log(numToWords(342251));
console.log(numToWords(1300420));
// 7       === seven
// 42      === forty-two
// 1999    === one thousand nine hundred and ninety-nine
// 2001    === two thousand and one
// 17999   === seventeen thousand nine hundred and ninety-nine
// 100001  === one hundred thousand and one
// 342251  === three hundred and forty-two thousand two hundred and fifty-one
// 1300420 === one million three hundred thousand four hundred and twenty
