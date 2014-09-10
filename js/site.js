var person = {
	name: "Rohit",

	_company: "OSI",
	getName: function(){
		return alert(this.name);
	}
}

Object.defineProperty(person, "org", {
	get: function(){
		return this._company;
	},

	set: function(newValue) {
			this._company = newValue;
		}
	}
});

alert("name: " + person.name + "\norg: " + person.org);

person.org = "nagarro";

alert("name: " + person.name + "\norg: " + person.org);
