// Implementation Inheritance

// Super Class
function SuperType(){
	this.property = "Super Constructor property";
}

SuperType.prototype = {
	property: "Super Prototype property",

	getSuperValue: function() {
		return this.property;
	}
};

// Sub class
function SubType(){
	this.subProperty = "sub-class";
}

SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function(){
	return this.subProperty;
};

var superObject = new SuperType();
// Even though .property is defined at both Constructor and Instance level
// Always instance level property takes priority.
alert(superObject.property);