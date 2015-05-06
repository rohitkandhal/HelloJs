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