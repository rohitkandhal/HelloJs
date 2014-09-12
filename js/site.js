// Combination Inheritance
function SuperType(firstName){
	this.name = firstName;
	this.coffee = ["Black", "Mocha", "Latte"];
}


SuperType.prototype = {
	price: "50",

	sayPrice: function(){
		alert(this.price);
	}
};

function SubType(name){
	SuperType.call(this,name);

	this.subCat = "Sub Category";
}

SubType.prototype = new SuperType();

SubType.prototype.saySubCat = function(){
	alert(this.subCat);
};

var instance1 = new SubType("Rohit");
instance1.coffee.push("Tea");
alert(instance1.coffee);
instance1.sayPrice();
instance1.saySubCat();

var instance2 = new SubType("Preeti");
alert(instance2.coffee);
instance2.sayPrice();
instance2.saySubCat();
