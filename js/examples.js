// 1. CSV Reader

function CSVReader() {
    this.regex = /,/;
    // use comma as delimiter
}

CSVReader.prototype.read = function (inp) {
    var lines = inp.trim().split(/\n/);

    return lines.map(function (line) {
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

alert(map[foo]);
// alert(map["[Object object]"]);
// and since map["[Object object]"] = "bar",
// this will alert "bar", not "foo"!!


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
var factorial3 = (function () {
    var mem = [1, 1];

    var fact = function (n) {
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
var fibonacci = (function () {
    var mem = [0, 1];

    var fib = function (n) {
        var result = mem[n];

        if (typeof result !== 'number') {
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

var arr = Array.apply(null, Array(101)).map(function (x, i) {
    return i;
}
    );
var squares = arr.map(function (x) {
    return sqrt2(x);
}
    );

function unique(arr) {
    var seen = {};
    return arr.filter(function (item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    }
        );
}

unique(squares);

// Prime Number 1 to n
// Prime factors of a numbber
