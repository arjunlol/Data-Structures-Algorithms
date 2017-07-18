//implement BFS search
const Graph = require('./4.graph.js');
const Queue = requrie('./3.queue.js');

const bfs = (root, graph) => {
  let queue = new Queue();
  let nodesLen = {};

  //first set
  queue.add(root.data)
  let current;


}


let graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
graph.addEdge('D', 'E');