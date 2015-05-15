// 1. CSV Reader

function CSVReader(){
    this.regex = /,/; // use comma as delimiter
}

CSVReader.prototype.read = function(inp){
  var lines = inp.trim().split(/\n/);
  
  return lines.map(function(line) {
    return line.split(this.regex);
  }, this); // for this.regex we need to specifically send reference of CSVReader
  
  // Also we can save this as var self = this and use self.regex
};

var reader = new CSVReader();
console.table(reader.read("a,b,c\nd,e,f\n"));

// Miscellaneous Questions

// 1. Objects as Hashtable but keys are always STRING
var foo = new Object();
var bar = new Object();
var map = new Object();

map[foo] = "foo";    // --> map["[Object object]"] = "foo";
map[bar] = "bar";    // --> map["[Object object]"] = "bar";
                     // second mapping REPLACES first mapping!

alert(map[foo]);     // --> alert(map["[Object object]"]);
                     // and since map["[Object object]"] = "bar",
                     // this will alert "bar", not "foo"!!
