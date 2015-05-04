function User(name) {
    this.name = name;
}

var a = new User("rohit");
var b = new User("karan");

// Different ways to add to prototype
a.__proto__.printHello = function() {
    return "Hello Printed";
}

a.printHello(); // "Hello Printed"
b.printHello(); // "Hello Printed"

User.prototype.sayHello = function() {
    return "Hello Hello";
}

a.sayHello();   // "Hello Hello"
b.sayHello();   // "Hello Hello"