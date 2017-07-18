class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode (node) {
    if(this.nodes[node]) {
      return `node ${node} already exists`;
    } else {
      this.nodes[node] = {};
    }
  }

  addEdge (node1, node2) {
    if(!this.nodes[node1] || !this.nodes[node2]) {
      return `nodes don't exist`
    } else if (this.nodes[node1][node2]){
      return `${node1}-${node2} already exists`
    } else {
      this.nodes[node1][node2] = true
    }
  }

  findEdges (node) {
    if (!this.nodes[node]) {
      return `node ${node} does not exist`;
    } else {
      return this.nodes[node]
    }
  }

  hasNode (node) {
    return this.nodes[node] !== undefined
  }

 removeEdge (node1, node2) {
  if (!this.nodes[node1] || !this.nodes[node2]) {
    return "nodes don't exist";
  } else {
    delete this.nodes[node1][node2] //or set to false
  }
 }

 removeNode (node) {
  if (!this.nodes[node]) {
    return `node ${node} does not exist`;
  } else {
    delete this.nodes[node]
    for (let currNode in this.nodes) {
      if (this.nodes[currNode][node]) {
        delete this.nodes[currNode][node]
      }
    }
  }
 }

}

module.exports = Graph;