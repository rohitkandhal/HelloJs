// Implementation Inheritance

// Super Class
function SuperType(){
	this.property = "Super Constructor property";
}

SuperType.prototype = {
	property: "Super Prototype property",

	valueOf: function() {
		return "this is custom value of";
	},

	getSuperValue: function() {
		return this.property;
	}
};

// Sub class
function SubType(){
	this.subProperty = "Sub Type Constructor";
};

SubType.prototype = new SuperType();

SubType.prototype = {
	valueOf: function() {
		return "Sub Type custom value of";
	}
};

SubType.prototype.getSubValue = function(){
	return this.subProperty;
};

var subtypeInstance = new SubType();

alert(subtypeInstance.valueOf());