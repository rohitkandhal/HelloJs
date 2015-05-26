// 1. Run length encoding
// wwwwoorrd -> w5o2r2d1
function runLengthEncode(inp) {
    var result= [], i = 0, j, count, currChar;

    if(inp) {
        while(i < inp.length) {
            currChar = inp[i];

            j = i + 1;
            count = 1;
            
            while(j < inp.length && inp[j] === currChar) {
                count++;
                j++;
            }
            
            i = j;

            result.push(currChar, count);
        }
    }
    return result.join('');
}

runLengthEncode("wwwwoorrd");