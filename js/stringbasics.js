var s_primitive = 'foo';    // String Literal
var s_obj = new String(s_prim); // String Object

var a = b = 3;
// It's interpreted as b = 3; var a = b; b will be added to global space

// 1. String to array conversion
var str1 = "1,2";
var arr1 = JSON.parse("[" + str1 + "]");    // arr1 = [1,2]
var arr2 = str1.split(",");     // arr2 = ["1", "2"]

// SLICE vs SPLICE

// 2. IsPalindrome
function isPalindrome1(inp) {
    for(var i = 0, n = inp.length-1; i <= n; i++, n--) {
        if(inp.charAt(i) !== inp.charAt(n)){
            return false;
        }
    }
    return true;
};

function isPalindrome2(inp) {
    return inp === reverseString1(inp);
}

// 3. Reverse a string
function reverseString1 (inp) {
    return inp === '' ? '' : reverseString(inp.slice(1)) + inp[0];
}

function reverseString2 (inp) {
    return inp ? inp.split('').reverse().join('') : '';
}