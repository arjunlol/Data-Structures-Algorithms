//directed graph
//find route betw two nodes

const Graph = require('./4.graph.js');
const Queue = require('./3.queue.js');

const isRouteBetwNodes = (node1,node2, graph) => {
  let queue1 = new Queue();
  let queue2 = new Queue();
  queue1.add(node1)
  queue2.add(node2)
  let visited1 = {};
  let visited2 = {};
  let current1;
  let current2;
  while(!queue1.isEmpty() || !queue2.isEmpty()) {
    current1 = queue1.remove();

    for (let nodes in graph.findEdges(current1)) {
      if(graph.hasNode(nodes)) {
        if (!visited1[nodes]) {
          visited1[nodes] = true;
          queue1.add(nodes);
          if (nodes === node2) return (true)
        }
      }
    }

    current2 = queue2.remove();
    for (let nodes in graph.findEdges(current2)) {
      if(graph.hasNode(nodes)) {
        if (!visited2[nodes]) {
          visited2[nodes] = true;
          queue2.add(nodes);
          if (nodes === node1) return (true)
        }
      }
    }
  }
  return false
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

console.log(isRouteBetwNodes('A', 'C', graph), true);
console.log(isRouteBetwNodes('A', 'E', graph), false);
console.log(isRouteBetwNodes('B', 'A', graph), true);
console.log(isRouteBetwNodes('D', 'E', graph), true);
