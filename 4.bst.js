class Node {
  constructor(data, left=null, right=null){
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(data, node=this.root) {
    if(!this.root) {
      this.root = new Node(data);
    } else if (data < node.data) {
      if(node.left === null) {
        node.left = new Node(data);
      } else {
        this.insert(data, node.left);
      }
    } else {
      if(node.right === null) {
        node.right = new Node(data);
      } else {
        this.insert(data, node.right)
      }
    }
  }

  printOrder() {
    console.log(this.root)
  }
}

module.exports = BST