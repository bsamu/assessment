// negative check missing from here

if (numLength === 4) {
    if (output !== "") {
        output += " ";
    }

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
        console.log("Line 49")
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
    return output.trim();
}