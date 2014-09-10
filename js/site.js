var company = {};

Object.defineProperties(company, {
	_name : {
		// Note that if you don't make it writable specifically then it would be read only
		writable: true,
		value: "Oil Systems Inc"
	},

	name: {
		configurable: true,
		get: function(){
			return this._name;
		}
	}
});

/*
Defined 
	1 Data Properties: _name
	1 Accessor Properties: name (with getter only)
*/

alert(company.name);	// "Oil Systems Inc"

// try to change the property. It shouldn't change
company.name = "nagarro";
alert(company.name);	// "Oil SYstems Inc"

// Add/update name property with setter
Object.defineProperty(company, "name", {
	set: function(newValue){
		this._name = newValue;
	}
});

// Now try to update it.
company.name = "nagarro";
alert(company.name);	// "nagarro"