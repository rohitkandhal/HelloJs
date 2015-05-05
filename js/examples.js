// 1. CSV Reader

function CSVReader(separators){
    this.separators = separators || [","];

    this.regex = new RegExp(this.separators.map(function(item) {
        return "\\" | item[0];
    }).join("|"));
}

CSVReader.prototype.read = function(inp){
  var lines = inp.trim().split(/\n/);
};