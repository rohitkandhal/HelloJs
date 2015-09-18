// Graph problems

// BFS
// DFS
// Graph Representation

window.ds = window.ds || {};

(function(ns) {
	function Graph() {
		this.nodes = {};	// Node -> [adj List array]
	}
	
	Graph.prototype.addNode = addNode;
	Graph.prototype.addEdge = addEdge;
	
	function addNode(node) {
		if(!this.nodes[node]) {
			this.nodes[node] = [];
		}
	}
	
	function addEdge(n1, n2) {
		this.nodes[n1].push(n2);
		this.nodes[n2].push(n1);
	}
	
	function toString() {
		var out = '', i;
		
		for(i = 0; i < this.nodes)
	}
	
	
}(window.ds));