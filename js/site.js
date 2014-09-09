var intAsString = "123";
var intValue = Number(intAsString);		// intValue is of type Number
alert("Original: " + typeof intAsString + " \nUpdated type: " + typeof intValue);

var obj = new Number(intAsString);	// obj is of type Object
alert("Original: " + typeof intAsString + " \nUpdated type: " + typeof obj);