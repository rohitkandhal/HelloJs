// 1. Run length encoding
// wwwwoorrd -> w5o2r2d1

var testStr1 = 'wwwwoorrd';
var testArr1 = [2, 7, 11, 15];

function runLengthEncode(inp) {
    var result = [], i = 0, j, count, currChar;

    if (inp) {
        while (i < inp.length) {
            currChar = inp[i];

            j = i + 1;
            count = 1;

            while (j < inp.length && inp[j] === currChar) {
                count++;
                j++;
            }

            i = j;

            result.push(currChar, count);
        }
    }
    return result.join('');
}

// runLengthEncode(testStr1);

// Find first two numbers which sum to target
function findTargetSum(inp, targetSum) {
    var hashMap = [], i = 0, first, second, remaining;

    if (Array.isArray(inp) && targetSum) {
        while (i < inp.length) {
            remaining = targetSum - inp[i];
            console.log(remaining, hashMap);

            // Can't use if(a) because hashMap[remaining] can have 0 value
            if (hashMap[remaining] !== undefined) {
                return { first: hashMap[remaining], second: i };
            }
            else if (!hashMap[inp[i]]) {
                hashMap[inp[i]] = i;
            }
            i++;
        }
    }
    return {};
}

findTargetSum(testArr1, 9);

