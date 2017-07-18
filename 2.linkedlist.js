class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  appendToTail(data) {
    let node = new Node(data);
    //if empty, set new node to head
    if (this.length === 0) {
      this.head = node
    } else {
      //start at head and go through until reach null tail
      let current = this.head;
      while(current.next != null) {
        current = current.next
      }
      current.next = node;
    }
    this.length++;
  }
}

module.exports = SinglyLinkedList;