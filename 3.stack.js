//pop
//push
//peak
//isempty

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null
  }

  isEmpty() {
    return this.top === null
  }

  push(data) {
    let node = new Node(data);
    node.next = this.top;
    this.top = node
  }

  pop() {
    let popped = this.top;
    if (!this.isEmpty()) {
      this.top = this.top.next;
    }
    return popped.data;
  }

  peak() {
    return this.top ? this.top.value : null
  }
}

module.exports = Stack;