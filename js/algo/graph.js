// Graph problems

// BFS
// DFS
// Graph Representation

window.ds = window.ds || {};

(function (ns) {
	ns.Graph = Graph;
	
	// Structure: Assuming there are no duplicates
	// HashTable
	// <vertex name> : <data, visited, distance, edges: [vertex name, vertex name]>
	// <vertex name> : <data, color, distance, edges: [vertex name, vertex name]>
	function Graph() {
		this.vertices = {};	
	}

	function Vertex(data) {
		this.data = data;
		this.edges = [];
		
		this.color = 'White';	// White (unvisited), Grey (visiting), Black (visited)
		this.distance = Infinity;	// Start with all separate
		this.parent = undefined;
		
		this.start = Infinity;	// dfs: First discovered time stamp
		this.finish = Infinity;	// dfs: Finish discovering time stamp
	}

	Graph.prototype.addVertex = addVertex;
	Graph.prototype.addEdge = addEdge;
	Graph.prototype.bfs = bfs;
	Graph.prototype.getVertex = getVertex;
	Graph.prototype.toString = toString;
	Graph.prototype.printShortestPath = printShortestPath;
	Graph.prototype.visitCallBack = visitCallBack;

	function addVertex(data) {
		var v = new Vertex(data)
		this.vertices[data] = v;
	}

	function getVertex(name) {
		return this.vertices[name];
	}

	function addEdge(from, to) {
		this.vertices[from].edges.push(to);
		this.vertices[to].edges.push(from);
	}
	
	// Breadth First Search traversal (using Queue)
	// Predecessor subgraph is a tree
	function bfs(source, visitCallBack) {
		var curr,
			neighbors,
			queue = [];

		Object.keys(this.vertices).forEach(function (k) {
			this.vertices[k].color = 'White';
		}, this);

		source.distance = 0;
		source.parent = undefined;
		queue.push(source);

		while (queue.length > 0) {
			curr = queue.shift();
			neighbors = curr.edges;

			visitCallBack(curr);
			curr.color = 'Grey';

			neighbors.forEach(function (n) {
				// Need to maintain three color state
				if (this.vertices[n].color === 'White') {
					this.vertices[n].color = 'Grey';	// Visiting node. Required to avoid duplicate visit.
					this.vertices[n].distance = curr.distance + 1;
					this.vertices[n].parent = curr;

					queue.push(this.vertices[n]);
				}
			}, this);

			curr.color = 'Black';
		}
	}

	function printShortestPath(source, target, out) {
		out = out || '';
		
		// Make sure BFS is called before calling Print path from source vertex
		if (source === target) {
			out += source.data;
		} else if (target.parent === undefined) {
			out += 'No Path';
		} else {
			out += printShortestPath(source, target.parent, out);
			out += target.data;
		}
		return out;
	}

	// Depth first search traversal (using Stack)
	// DFS doesn't need a source or start vertex.
	// Predecessor subgraph is a forest.
	function dfs(visitCallBack) {
		var time = 0;

		// Iterate over all nodes and clear color
		Object.keys(this.vertices).forEach(function (name) {
			var node = this.vertices[name];

			node.color = 'White';
			node.parent = undefined;
		}, this);

		// DFS visit from all white vertices
		Object.keys(this.vertices).forEach(function (name) {
			var node = this.vertices[name];

			if (node.color === 'White') {
				dfsInternal(node, visitCallBack);
			}
		}, this)
		
		// Internal dfs function
		function dfsInternal(curr, visitCallBack) {
			var neighborName, neighbor;
			time = time + 1;
			
			curr.start = time;
			curr.color = 'Grey';
			
			if(visitCallBack) { 
				visitCallBack(curr);
			}
			
			for(var i = 0; i < curr.edges.length; i += 1) {
				neighborName = curr.edges[i];
				neighbor = this.vertices[neighborName];
				
				if(neighbor.color === 'White') {
					neighbor.parent = curr;
					
					dfsInternal(neighbor, visitCallBack);
				}
			}
			
			curr.color = 'Black';
			time = time + 1;
			curr.finish = time;
		}
	}

	function visitCallBack(vertex) {
		console.log(vertex.data);
	}

	function toString() {
		var out = '', v;
		
		// Object.keys(this.vertices) - returns array like object
		Object.keys(this.vertices).forEach(function (curr) {
			v = this.vertices[curr];

			out += v.data + ' -> ';
			out += v.edges.join(', ');
			out += '\n';
		}, this);	
		// NOTE: This is passed as second parameter to forEach (callback, this)  
		// for accessing this.vertices in foreach loop
		
		return out;
	}
} (window.ds));

// BFS test
var graph = new window.ds.Graph();
var myVertices = ['R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y'];
myVertices.forEach(function (v) {
	graph.addVertex.call(graph, v);
});
	
//  R - S   T - U
//	|	| / | / |
//  V   W - X - Y
graph.addEdge('R', 'V');
graph.addEdge('R', 'S');
graph.addEdge('S', 'W');
graph.addEdge('W', 'T');
graph.addEdge('W', 'X');
graph.addEdge('T', 'X');
graph.addEdge('T', 'U');
graph.addEdge('X', 'U');
graph.addEdge('X', 'Y');
graph.addEdge('U', 'Y');

// console.log(graph.toString());
// Run BFS traversal
graph.bfs(graph.getVertex('R'), graph.visitCallBack);

// Shortest path calculation
graph.bfs(graph.getVertex('Y'), graph.visitCallBack);
graph.printShortestPath(graph.getVertex('Y'), graph.getVertex('R')); // Y > X > W > S > R