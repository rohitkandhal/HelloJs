// Prototype pattern
function Company(){
	this.temp = "xyz";	// Remember to use this otherwise constructor won't know where to define the property.
}

Company.prototype.name = "";
Company.prototype.year = "1980";

Company.prototype.sayYear = function(){
	return this.year + 10;
};

var company1 = new Company();
alert(company1.temp);