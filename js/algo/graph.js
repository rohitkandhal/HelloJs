// Graph problems

// BFS
// DFS
// Graph Representation

window.ds = window.ds || {};

(function(ns) {
	ns.Graph = Graph;
	
	function Graph() {
		this.vertices = [];
	}
	
	function Vertex(data) {
		this.data = data;
		this.visited = false;
		this.distance = 0;
		this.edges = [];
	}
	
	Graph.prototype.addVertex = addVertex;
	Graph.prototype.addEdge = addEdge;
	Graph.prototype.getVertex = getVertex;
	Graph.prototype.toString = toString;
	
	function addVertex(data) {
		var v = new Vertex(data)
		this.vertices.push(v);
	}
	
	function getVertex(data) {
		var i, curr;
		
		for(i = 0; i < this.vertices.length; i++) {
			curr = this.vertices[i];
			
			if(curr.data === data) {
				return curr;
			}
		}
	}
	
	function addEdge(d1, d2) {
		var v1 = this.getVertex(d1),
			v2 = this.getVertex(d2);
		
		v1.edges.push(v2.data);
		v2.edges.push(v1.data);
	}
	
	function bfs(source){
		var v = this.vertices, 
		adjList = this.adjList,
		curr,
		neighbors,
		queue = [];
		
		queue.push(source);
		
		while(queue.length > 0) {
			curr = queue.shift();
			neighbors = curr.edges;
			
		}
		
	}
	
	function toString() {
		var out = '', i, v;
		
		for(i = 0; i < this.vertices.length; i += 1) {
			v = this.vertices[i];
			
			out += v.data + ' -> ';
			out += v.edges.join(', ');
			out += '\n';
		}
		return out;
	}
	
}(window.ds));

// test
var graph = new window.ds.Graph();
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
myVertices.forEach(function(v) {
	graph.addVertex.call(graph, v);
	});
	
graph.addEdge('A', 'C');
graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
// graph.addEdge('E', 'I'); disconnect I

graph.toString();
