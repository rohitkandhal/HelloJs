var inpArr = [{id: 1, foo: [{a: "dog", b: "cat"}]},
				{id: 2, foo: [{a: "kutta", b: "billi"}]}];


var myFilter = function(val, item, index, array){
	
	var searchResult = scanProperties(item, val);
	return searchResult;
};


// Note:pass additional argument to default filter.
// using Function.Prototype.Bind
var filterResult = inpArr.filter(myFilter.bind(null, "dog"));

alert(filterResult);


// Recursively scan all properties
function scanProperties(obj, val){

	var result = false;
	for(var property in obj){
		if(obj.hasOwnProperty(property) && obj[property] != null) {
			if(obj[property].constructor == Object) {
				result = result || scanProperties(obj[property], val);
			} else if( obj[property].constructor == Array){
				for (var i = 0; i < obj[property].length; i++){
					result = result || scanProperties(obj[property][i], val);
				}
			} else {
				result = result || (obj[property] == val);
			}
		}
	}
	return result;
};
