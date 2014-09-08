var values = [1, 2, 3, 4, 5];

var myStore = [{category: "Cat A"}, {category: "Cat B"}, {category: "Cat A"}];

var mySimpleStore = ["Cat A", "Cat B", "Cat A"];

window.color = "window Color"
var myObject = { color: "object Color"};

var getColor = function(){
	alert(this.color);
};

// Window level
getColor();

getColor.apply(this);
getColor.apply(window);
getColor.apply(myObject)