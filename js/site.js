//Constructor - Global Scope
function Company(name, year){
	this.name = name;
	this._year = year;

	Object.defineProperties(this, {
		year: {
			get: function(){
				return this._year;
			},
			set: function(newValue){
				if(Number(newValue)){				
					this._year = newValue;
				}
			}
		}
	});
}

var myCompany = new Company("My Company", 056 );

alert(myCompany.name + ", " + myCompany.year);	// Output: My Company, 46
