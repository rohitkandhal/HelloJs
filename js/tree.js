// TREE GRAPH related programs

function Tree(val){

    if(!(this instanceof Tree)){
        return new Tree(val);
    }
    this.value = val;
    this.children = [];
}

Tree.prototype = {
    addChild: function(tree) {
        this.children.push(tree);
    }
}