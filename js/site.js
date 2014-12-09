var range1 = document.createRange(),
    range2 = document.createRange();

var p1 = document.getElementById("p1");
var helloNode = p1.firstChild.firstChild;
var worldNode = p1.firstChild.nextSibling;

console.log(helloNode + ""  +worldNode);

range1.setStart(helloNode, 2);
range1.setEnd(worldNode,3);

console.log(range1);
range1.deleteContents();