// OBJECTS CLASSES PROTOTYPES

// 1.1 Prototype should contain immutable data e.g. methods. Stateful data should be on instance level
function User(name) {
    // new agnostic constructor
    if(!(this instanceof User)){
        return new User("Default " + name);
    }

    this.name = name;
    this.age = 0;
}

var a = new User("rohit");  // called as constructor
var b = new User("karan");

// 1.2 Different ways to add to prototype
//  A. Don't use this as it causes object's brain transplant and 
//      compiler optimization doesn't work
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


// 2. METHOD CHAINING or FLUENT INTERFACE pattern
// calling multiple functions on the same object consecutively
User.prototype.setName = function(name) {
    this.name = name;
}

User.prototype.setAge = function(age) {
    this.age = age;
}

User.prototype.printDetails = function() {
    console.log("User: " + this.name + " - " + this.age);
}

var u1 = new User();
u1.setName("User 1");
u1.setAge(25);
u1.printDetails();

// In order to support method chaining, we need to return the current object 
// at the end of every function. That's why add return this
User.prototype.setName = function(name) {
    this.name = name;
    return this;
}

User.prototype.setAge = function(age) {
    this.age = age;
    return this;
}

User.prototype.printDetails = function() {
    console.log("User: " + this.name + " - " + this.age);
    return this;
}

u1.setName("Fancy user").setAge(18).printDetails();


// 3. Objects
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


// INHERITANCE
function Scene(context, images, height, width){
    this.context = context;
    this.images = images;
    this.height = height;
    this.width = width;
    this.actors = [];
}

Scene.prototype.register = function(actor){
    this.actors.push(actor);
}

Scene.prototype.unregister = function(actor){
    var index = this.actors.indexOf(actor);
    if(index >=0){
        this.actors.splice(index, 1);
    }
}

Scene.prototype.draw = function() {
    this.context.clearRect(0, 0, this.width, this.height);

    for ( var a = this.actors, i = 0, n = a.length; i < n; i++){
        a[i].draw();
    }
};

function Actor(scene, x, y){
    this.scene = scene;
    this.x = x;
    this.y = y;
    scene.register(this);
}

Actor.prototype.moveTo = function(x, y){
    this.x = x;
    this.y = y;
    this.scene.draw();
}

Actor.prototype.exit = function() {
    this.scene.unregister(this);
    this.scene.draw();
}

Actor.prototype.draw = function() {
    var image = this.scene.images[this.type];
    this.scene.context.drawImage(image, this.x, this.y);
};

Actor.prototype.width = function(){
    return this.scene.images[this.type].width;
};

Actor.prototype.height = function() {
    return this.scene.images[this.type].height;
};

function SpaceShip(scene, x, y){
    Actor.call(this, scene, x, y);
    this.points = 0;
};

SpaceShip.prototype = Object.create(Actor.prototype);
SpaceShip.prototype.type = "spaceShip";

SpaceShip.prototype.scorePoint = function() {
    this.points++;
}

SpaceShip.prototype.left = function() {
    this.moveTo(Math.max(this.x -10 ,0), this.y);
}

SpaceShip.prototype.right = function() {
    var maxWidth = this.scene.width - this.width();
    this.moveTo(Math.min(this.x + 10, maxWidth), this.y);
}