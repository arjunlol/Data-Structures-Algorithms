//partition LL
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

const partition = (value, head) => {
  //store nodes in new linkedlist
  console.log(head)
  let current = head;
  let left = new SinglyLinkedList()
  let right = new SinglyLinkedList()

  while (current != null) {
    if(current.data < value) {
      left.appendToTail(current.data)
    } else {
      right.appendToTail(current.data)
    }
    current = current.next
  }
  current = left.head
  while (current.next != null) {
    current = current.next
  }
  current.next = right.head
  head = left.head

  //print results
  current = head
  while(current !== null) {
    console.log(current.data)
    current = current.next
  }
}


// create new LL nodes
let a = new SinglyLinkedList()
a.appendToTail(3)
a.appendToTail(5)
a.appendToTail(8)
a.appendToTail(5)
a.appendToTail(10)
a.appendToTail(2)
a.appendToTail(1)

partition(5, a.head);

