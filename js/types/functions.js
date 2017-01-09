// FUNCTION basics
// 1. Apply
function Product(name, price) {
    this.name = name;
    this.price = price;
}
function Food1(args) {
    Product.apply(this, args);
    // args is expected to be an array [name, price]
    this.category = "Food";
}
var f1 = new Food1(["Chicken", 100]);
// 2. Call
function Food2(name, price) {
    Product.call(this, name, price);
    this.category = "Food";
}
Food2.prototype = Object.create(Product.prototype);
var f2 = new Food2("Paneer",50);
console.log(f1, f2);
// 3. Function scope
// Rule: JS have FUNCTION scope, not block scopes. Parameters and variables defined in a 
// function are not visible outside of the function and a variable defined inside a 
// function is visible everywhere within the function
var foo = function() {
    var a = 1
      , b = 2;
    var bar = function() {
        var b = 50
          , c = 60;
        a = 100;
        console.log("bar: ", a, b, c);
    };
    // a = 1, b = 2, c = undefined
    bar();
    // a = 100, b = 2, c = undefined
};
foo();
// Override console log
// var origConsoleLog = console.log;
// console.log = function () {
//     var newArgs = [];
//     for(var i = 0; i < arguments.length; i++) {
//         newArgs.push(arguments[i] || 'undefined');
//     }
//     origConsoleLog.apply(null,newArgs);
// }
// Currying
function curry(fn) {
    // curry expects a function as its arguments
    var arity = fn.length;
    // number of arguments
    return ( function resolver() {
        // resolves whether to return a new function or call actual function
        var memory = Array.prototype.slice.call(arguments);
        // just creating a deep copy of arguments object
        return function() {
            var local = memory.slice();
            Array.prototype.push.apply(local, arguments);
            var next = local.length >= arity ? fn : resolver;
            return next.apply(null, local);
        }
        ;
    }()) ;
}
function volume(l, w, h) {
    return l * w * h;
}
var curried = curry(volume);
var length = curried(2);
console.log('Volume: ', length(3)(4));
// 24
console.log('Volume: ', curried(2)(3)(4));
// 24

// Currying Another Approach
function curryTest2() {
    function curry() {
        var slice = Array.prototype.slice
          , args = slice.apply(arguments)
          , self = this;

        return function() {
            return self.apply(null, args.concat(slice.apply(arguments)));
        }
    }
    function add() {
        var slice = Array.prototype.slice
          , args = slice.apply(arguments);
        return args.reduce(function(accumulator, currentValue) {
            return accumulator + currentValue;
        });
    }

    add.curry = curry;

    var add1 = add.curry(1);
    var add5 = add.curry(5);

    console.log(add1(5));
    console.log(add5(5));
}

// using appl, bind, call 
function Person() {
    this.name = 'default';
    this.getName = function() {
        console.log(this.name);
        return this.name;
    }
}
var p = new Person();
var obj = {
    name: 'Rohit'
}
var newFunction = p.getName.bind(obj);
// Bind creates a new function with different context
newFunction();
// 'rohit'
p.getName.call(obj);
p.getName.apply(obj);
