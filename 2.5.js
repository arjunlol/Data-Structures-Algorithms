//sum reverse linked list
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

function addReverseLists(headA, headB) {
  let currentA = headA
  let currentB = headB
  let output = new SinglyLinkedList()
  let sum = 0;
  let carry = 0;
  while(currentA !== null) {
    sum = currentA.data + currentB.data
    if(carry) {
      sum += carry
      carry = 0
    }
    if (sum >= 10) {
      sum -= 10;
      carry = 1;
    }
    output.appendToTail(sum)
    currentA = currentA.next
    currentB = currentB.next
  }

  //print output
  let current = output.head
  while(current !== null) {
    console.log(current.data)
    current = current.next
  }

}


let a = new SinglyLinkedList()
a.appendToTail(7)
a.appendToTail(1)
a.appendToTail(6)

let b = new SinglyLinkedList()
b.appendToTail(5)
b.appendToTail(9)
b.appendToTail(2)

addReverseLists(a.head, b.head)