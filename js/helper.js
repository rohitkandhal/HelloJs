// ----------------------- Even Odd check ----------
function isNumber(n)
{
   // return n == parseFloat(n);	//Wrong it won't capture "23@23" string
   // return typeof n === 'number'	// Also good way without creating new variable
   return !!Number(n);
}

function isEven(n) 
{
   return isNumber(n) && (n % 2 == 0);
}

function isOdd(n)
{
   return isNumber(n) && (Math.abs(n) % 2 == 1);
}

function decimalToHex(n) {
	// Converts 255 to 'FF'
	var hexStr = '0123456789ABCDEF';
	return hexStr.substr((n >> 4) & 0x0F, 1) + hexStr.substr(n & 0x0F, 1);
}

function isArray(inp) {
	return Array.isArray(inp);
}

// 23.99 -> 23
function toInt(n) {
	return Math.floor(n);
}

function trim(str) {
	return str.replace(/^\s+|\s+$/g, "");
}

function generateNumbers(n) {
	// Generate array like [0, 1, 2, 3,]
	return Array.apply(null, Array(n)).map(function(x,i) {return i})
}

function unique(arr) {
	// Removes duplicates from an array using hash table
    var seen = {};
    return arr.filter(function (item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}

// Converts array like object (e.g. argument) to array
function toArray(arrayLikeObj) {
	return Array.prototype.slice.call(arrayLikeObj);
}

// There are only 6 falsy values in Javascript
// 1. Number 0, not '0' string
// 2. Empty string ''
// 3. Undefined
// 4. null
// 5. Number NaN
// 6. false boolean, not 'false' string
function isFalsy(inp) {
	if(inp === 0 || inp === '' || inp === undefined 
	||	inp === null || inp === false || inp === NaN) {
		return true;
	}
	return false;
}

// Event addition, removing utility
var EventUtil = {

	addHandler: function(element, type, handler){
		if(element.addEventListener){
			element.addEventListener(type, handler, false);
		} else if(element.addHandler){
			element.addHandler("on" + type, handler);
		} else {
			element["on"+ type] = handler;
		}
	},

	getEvent: function(event){
		return event ? event : window.event;
	},

	getTarget: function(event){
		return event.target || event.srcElement;
	},

	preventDefault: function(event){
		if(event.preventDefault){
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	},

	removeHandler: function(element, type, handler){
		if(element.removeEventListener){
			element.removeEventListener(type, handler, false);
		} else if(element.removeHandler){
			element.removeHandler("on" + type, handler);
		} else {
			element["on" + type] = handler;
		}
	},

	// NOTE: Cancel bubble for stopping propagation and return value for cancelling event altogether.
	
	stopPropagation: function (event) {
		if(event.stopPropagation){
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}
	}
};
