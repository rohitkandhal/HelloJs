// ARRAYS and DICTIONARIES


// 1.1 Sparse Arrays (arrays with holes)
var a1 = new Array(3);

// forEach function doesn't iterate over undefined values
// Output: Doesn't print anything
a1.forEach(function(x,i) {
    console.log(i+ ". " + x);
})

// 1.2 Dense Arrays (arrays without holes)
var a2 = Array.apply(null, new Array(3));
// Output: Prints 3 elements
a2.forEach(function(x,i) {
    console.log(i+ ". " + x);
})

// 2.1 Hashmaps / Dictionary using RAW Object (Table of string - value)
var dict1 = { 
    rohit: 26,
    karan: 25
}

    // for..in loop gives property names (both object and its prototype)
for(var i in dict1){
    console.log(i + ": " + dict1[i]);
}

// Only use direct instances of Object as dictionaries - not subclasses or arrays 

// DON'T USE FOLLOWING because of PROTOTYPE Pollution
var dict2 = {};
dict2.rohit = 26;
dict2.karan = 25;

Object.prototype.count = function() {
    var count = 0;
    for(var item in this){
        count++;
    }
    return count;
}

dict2.count();  // 3 though we've only 2 enteries. 1 for count

// 2.2 Never add properties to Object.prototype, otherwise for..in loop wont work

// 3.1 To avoid prototype pollution, use null prototype
function C(){}
C.prototype = null; // DOESN'T WORK instead use Object.Create

var x = Object.create(null);    // Object.create(prototype, property descriptor map)

// 3.2 To avoid prototype pollution, use hasOwnProperty
var hasOwn = Object.prototype.hasOwnProperty;

var dict = {};
hasOwn.call(dict, "hasOwnProperty");   // false
dict.hasOwnProperty = 25;       // Beware someone might override the object function
hasOwn.call(dict, "hasOwnProperty");   // true

// 3.3 Good Custom Dictionary
function Dict(elements) {
    this.elements = elements || {};
}

Dict.prototype.add = function(key, val){
    this.elements[key] = val;
}

Dict.prototype.remove = function(key){
    if(this.has(key)){
        // delete is only effective on an object's properties. It has no effect on variable or function names.
        delete this.elements[key];
    }
}

Dict.prototype.get = function(key){
    // check for own property
    return this.has(key) ? this.elements[key] : undefined; 
}

// HasOwnProperty or Key checker
Dict.prototype.has = function(key){
    var hasKeyFun = {}.hasOwnProperty;
    return hasKeyFun.call(this.elements, key);
}


// 4. How to add properties to Object.prototype without prototype pollution
//  using Object.defineProperty(obj, prop, descriptor)
//  descriptor: configurable, enumerable, value (any valid JS value - number, object, function), writable, get, set
Object.defineProperty(
    Object.prototype, 
    "allKeys",
    {
        configurable: true,
        enumerable: false,  // hides from for..in
        writable: true,
        value: function() {
            var result = [];
            for(var key in this){
                result.push(key);
            }
            return result;
        }
    }
);


// 5. Use a for loop to iterate over an Array instead of for..in loop
var prices = [10,20,30,40,50];
var total = 0;

for(var p in prices){
    total += p;
}
// total = "001234"
// WHY:
// 1. An array is an object with keys as 1,2,3.. But these are strings not integer
// 2. A for..in loop always enumerate the keys. Thus p will be "0", "1", "2", "3"...
//      += operator will do string concatenation instead of addition

var total = 0;
for(var i = 0, n = prices.length; i < n; i++){
    total += prices[i];
}
// total = 150

// 6. Array.forEach loop is syntactic sugar of for loop.
prices.forEach(function(p){
   total += p; 
});


// 7. Array like objects can use Array.prototype methods
var arrayLike = { 0: "a", 1: "b", 2:"c", length: 3};
var result = Array.prototype.map.call(arrayLike, function(currentVal, index, array){
    return currentVal.toUpperCase();
})

// Array concat function checks for [[class]] attribute. Thus works only on true array

// 8. Array-like objects are structural typing or duck typing
// To find if an object is an array use:
//      a. Array.isArray: tests for true arrays
//      b. x instanceof Array






