// FUNCTION basics

// 1. Apply
function Product(name, price){
    this.name = name;
    this.price = price;

    return this;
}

function Food1(args) {
    Product.apply(this, args);  // args is expected to be an array [name, price]
    this.category = "Food";
}
var f1 = new Food1(["Chicken", 100]);   // note that it's an array


// 2. Call
function Food2(name, price) {
    Product.call(this, name, price);
    this.category = "Food";
}

Food2.prototype = Object.create(Product.prototype);
var f2 = new Food2("Paneer", 50);

console.log(f1, f2);

// 3. Function scope
// Rule: JS have FUNCTION scope, not block scopes. Parameters and variables defined in a 
// function are not visible outside of the function and a variable defined inside a 
// funciton is visible everywhere within the function

var foo = function () {
    var a = 1, b = 2;

    var bar = function() {
        var b = 50, c = 60;

        a = 100;
        log("bar: ", a, b, c);
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
