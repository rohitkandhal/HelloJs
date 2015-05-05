// OBJECTS CLASSES PROTOTYPES

// Prototype should contain immutable data e.g. methods. Stateful data should be on instance level
function User(name) {
    // new agnostic constructor
    if(!(this instanceof User)){
        return new User("Internal: " + name);
    }

    this.name = name;
}

var a = new User("rohit");  // called as constructor
var b = new User("karan");

// Different ways to add to prototype
// A. Don't use this as it causes object's brain transplant and 
// compiler optimization doesn't work
a.__proto__.printHello = function() {
    return "Hello Printed";
}

a.printHello(); // "Hello Printed"
b.printHello(); // "Hello Printed"

// B. Suggested way to use prototype
User.prototype.sayHello = function() {
    return "Hello Hello";
}

a.sayHello();   // "Hello Hello"
b.sayHello();   // "Hello Hello"

// ** forget to add new **
var c = User("global");     // Called as function
this.name; // Name added to global space

// ** Additional object **
function Shape(x, y) {
    var self = this instanceof Shape ? this : Object.create(Shape.prototype);
    // Industry standard to Check for Undefined or null ONLY (x == null)

    self.x = x == null? 0: x;
    self.y = y == null? 0: y;
    return self;
}

var d = Shape(3,3);

// CLOSURES : A special object consisting of // a function & // environment in which it was created
// a. Basic example
function makeAdder(x) {
    return function(y){
        return x + y;
    }
}

var add5 = makeAdder(5);
console.log(add5(3));   // 8

// b. Practical example
var counter = (function() {
    // private variable
    var privateCounter = 0;

    // private function
    function changeBy(val){
        privateCounter += val;
    }
    
    // Closure 
    return {
        increment: function() {
            changeBy(1);
        },
        decrement: function() {
            changeBy(-1);
        },
        value: function(){
            return privateCounter;
        }
    };
})();   // IIFE

counter.value();

// c Practical example in different way
var makeCounter = function() {
    // private variable
    var privateCounter = 0;

    // private function
    function changeBy(val){
        privateCounter += val;
    }
    
    // Closure 
    return {
        increment: function() {
            changeBy(1);
        },
        decrement: function() {
            changeBy(-1);
        },
        value: function(){
            return privateCounter;
        }
    };
};   // closure as a class

// Both counter will work independently
var counter1 = makeCounter();
var counter2 = makeCounter();
