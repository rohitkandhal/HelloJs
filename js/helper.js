// ----------------------- Even Odd check ----------
function isNumber(n)
{
   return n == parseFloat(n);
}

function isEven(n) 
{
   return isNumber(n) && (n % 2 == 0);
}

function isOdd(n)
{
   return isNumber(n) && (Math.abs(n) % 2 == 1);
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