// 1. CSV Reader

function CSVReader() {
    this.regex = /,/;
    // use comma as delimiter
}

CSVReader.prototype.read = function(inp) {
    var lines = inp.trim().split(/\n/);
    
    return lines.map(function(line) {
        return line.split(this.regex);
    }
    , this);
    // for this.regex we need to specifically send reference of CSVReader
    // Also we can save this as var self = this and use self.regex
}

var reader = new CSVReader();
console.table(reader.read("a,b,c\nd,e,f\n"));

// Miscellaneous Questions

// 1. Objects as Hashtable but keys are always STRING
var foo = new Object();
var bar = new Object();
var map = new Object();

map[foo] = "foo";
// map["[Object object]"] = "foo";
map[bar] = "bar";
// map["[Object object]"] = "bar";
// second mapping REPLACES first mapping!

// 2. Factorial 
function factorial1(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial1(n - 1)
}

function factorial2(n) {
    var result = 1;
    for (var i = n; i > 0; i--) {
        result = i * result;
    }
    return result;
}

// factorial with memoization
var factorial3 = (function() {
    var mem = [1, 1];
    
    var fact = function(n) {
        var result = mem[n];
        
        if (typeof result !== 'number') {
            result = n * fact(n - 1);
            mem[n] = result;
        }
        return result;
    }
    return fact;
}
());

// 3. Fibonacci
function fib(n) {
    if (n === 0 || n === 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

// with memoization
var fibonacci = (function() {
    var mem = [0, 1];
    
    var fib = function(n) {
        var result = mem[n];
        
        if (result === undefined) {
            result = fib(n - 1) + fib(n - 2);
            mem[n] = result;
        }
        
        return result;
    }
    return fib;
}
());

// 4. Calculate Square Root of a number
function sqrt1(n) {
    // returns [4-8]: 2; [9-15]: 3
    if (n <= 1) {
        return n;
    }
    
    for (var i = 1; i <= 1 + Math.floor(n / 2); i += 1) {
        if (i * i === n) {
            return i;
        } else if (i * i > n) {
            return i - 1;
        }
    }
}

// Using binary search approach
function sqrt2(n) {
    var i = 0, 
    low, mid, high, square;
    
    if (n < 0) {
        throw 'Wrong input';
    }
    
    if (n < 2) {
        return n;
    }
    
    low = 0;
    high = n;
    
    while (high > low + 1) {
        // Make sure difference is more than one otherwise 
        // It would be an infinite loop
        mid = low + Math.floor((high - low) / 2);
        square = mid * mid;
        
        if (square === n) {
            return mid;
        } else if (square < n) {
            low = mid;
        } else {
            high = mid;
        }
    }
    return low;
}

var arr = Array.apply(null , Array(101)).map(function(x, i) {
    return i;
}
);
var squares = arr.map(function(x) {
    return sqrt2(x);
}
);

function unique(arr) {
    var seen = {};
    return arr.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    }
    );
}

unique(squares);

// Prime Number problems

// a) Primality Test: Do not give prime factors but tells if the input number is prime or not
// 1. Loop from 2 to n-1 if anything divides completely then it's not a prime
// 2. Plus: Loop only from 2 to n/2
// 3. Plus: Loop only from 2 to sqrt(n)

// m = sqrt(n) then m×m = n. Now if n is not a prime then n can be written as n = a×b, so m×m = a×b. Notice that m is a real number whereas n, a and b are natural numbers.

// Now there can be 3 cases:

// a > m ⇒ b < m
// a = m ⇒ b = m
// a < m ⇒ b > m
// In all 3 cases, min(a,b) ≤ m. Hence if we search till m, we are bound to find at least one factor of n, which is enough to show that n is not prime.
function isPrime(n) {
    if(n === 2) {
        return true;
    }

    if(n % 2 === 0) {
        return false;
    }

    // Check only odd numbers
    for(var i = 3; i <= Math.sqrt(n); i += 2) {
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}

// b) Print all Prime numbers from 1 to n
// Sieve of Eratosthenes
function printPrimes(n) {
    var arr = [], output = [], i, j, p;
    
    for (i = 0; i <= n; i += 1) {
        arr.push(true);
    }
    
    for (p = 2; p <= n; p += 1) {
        if (arr[p]) {
            output.push(p);

            // Mark all multiples like 2p, 3p, 4p till j <= n
            for (j = 2 * p; j <= n; j += p) {
                arr[j] = false;
            }
        }
    }
    
    return output;
}

// c) Integer Factorization: Prime factors of a number


// FizzBuzz test
function fizzBuzz() {
    var i = 1, max = 20, out = [];

    // 1 to 100 (inclusive)
    // 3 - Fizz
    // 5 - Buzz
    // 3, 5 - FizzBuzz
    for (i = 1; i <= max; i += 1) {
        if(i % 3 === 0 && i % 5 === 0) {
            out.push('FizzBuzz');
        }
        else if (i % 5 === 0) {
            out.push('Buzz');
        }
        else if (i % 3 === 0) {
            out.push('Fizz');
        }
        else {
            out.push(i);
        }
    }

    return out.join(' ');
}


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

///////////////////
// Convert &lt;&quot;&gt; -> <">
var testHTML = "&lt;&quot;&gt;";
function htmlDecoder(inp) {
    var entity = {
        lt: "<",
        quot: "\"",
        gt: ">"
    }

    function replacer(match, p1) {
        var r = entity[p1];

        return typeof r === "string" ? r : p1;
    }

    var regexToMatch = /&([^&;]+);/g;

    return inp.replace(regexToMatch, replacer);
}

///////////////////
// String replace method working
var a = "abc12345#$*%";

function replacer(match, p1, p2, p3, offset, string) {
    console.log(JSON.stringify(arguments));
    return [p1, p2, p3].join(' - ');
}
a.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
