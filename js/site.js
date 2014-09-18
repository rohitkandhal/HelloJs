// Closures and Variables
function createFunction(){
	var result = new Array();

	for( var i=0; i<10; i++) {
		// Create new function which returns the current index
		result[i] = function() {
			return i;
		};
	}

	// return an array of functions
	return result;
};

// Get 10 functions
var funArray = createFunction();

// NOTE: Though we are calling first function it should be 0 instead it's the last value
alert("Closures without scope fixed: " + funArray[0]());	// Ouput: 10


// FIX:
function createNewFunction(){
	var result = new Array();

	for(var i =0 ; i<10; i++){
		result[i] = function(num) {
			return function() {
				return num;
			};
		}(i);
	}

	return result;
}

var newFunArray = createNewFunction();

// newFunArray is an array of function definitions.
alert("Closures with scope fixed: " + newFunArray[1]());	// Output: 1

