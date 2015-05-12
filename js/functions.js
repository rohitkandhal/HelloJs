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