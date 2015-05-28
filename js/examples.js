// 1. CSV Reader

function CSVReader(){
    this.regex = /,/; // use comma as delimiter
}

CSVReader.prototype.read = function(inp){
  var lines = inp.trim().split(/\n/);
  
  return lines.map(function(line) {
    return line.split(this.regex);
  }, this); // for this.regex we need to specifically send reference of CSVReader
  
  // Also we can save this as var self = this and use self.regex
};

var reader = new CSVReader();
console.table(reader.read("a,b,c\nd,e,f\n"));

// Miscellaneous Questions

// 1. Objects as Hashtable but keys are always STRING
var foo = new Object();
var bar = new Object();
var map = new Object();

map[foo] = "foo";    // --> map["[Object object]"] = "foo";
map[bar] = "bar";    // --> map["[Object object]"] = "bar";
                     // second mapping REPLACES first mapping!

alert(map[foo]);     // --> alert(map["[Object object]"]);
                     // and since map["[Object object]"] = "bar",
                     // this will alert "bar", not "foo"!!


// 2. Factorial 
function factorial(n){
  if(n === 0 || n ===1 ){
    return 1;
  }
  return n * factorial(n-1)
}

function factorial1(n) {
  var result = 1;
  for(var i = n; i > 0; i--){
    result = i * result;
  }
  return result;
}

// factorial with memoization
var factorial2 = (function() {
  var mem = [1, 1];

  var fact = function(n) {
    var result = mem[n];

    if(typeof result !== 'number') {
      result = n * fact(n-1);
      mem[n] = result;
    }

    return result;
  }

  return fact;
}());

// 3. Fibonacci
var count = 0;
function fib(n) {
  if(n===0 || n === 1) {
    return n;
  }
  count++;
  return fib(n-1) + fib(n-2);
}

// with memoization
var fibonacci = (function() {
  var mem = [0, 1];

  var fib = function(n) {
    var result = mem[n];

    if(typeof result !== 'number') {
      result = fib(n-1) + fib(n-2);
      mem[n] = result;
    }

    return result;
  }
  return fib;
}());

