//first create unsorted linked list
//make print method
//make removeDup method

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

  printList() {
    //if empty list
    if (this.length === 0) {
      console.log('List Empty')
    } else {
      //first print head data, then loop through print until null tail
      let current = this.head;
      console.log(current.data)
      while(current.next != null) {
        console.log(current.next.data)
        current = current.next
      }
    }
  }

  removeDups() {
    //make hash map while looping through list
    let map = {}
    let current = this.head;
    map[current.data] = true
    //start at head loop through until reach null tail
    while(current != null) {
      //if havn't seen value, add to hash table
      if (current.next && !map[current.next.data]) {
        map[current.next.data] = true //value has been seen
      } else {
      //if next value seen, remove duplicate node
      //if tail dup, set next to null
        current.next = current.next ? current.next.next : null
        this.length--
      }
      current = current.next
    }
  }
}

let linkyList = new SinglyLinkedList();
linkyList.appendToTail('a');
linkyList.appendToTail('p');
linkyList.appendToTail('p');
linkyList.appendToTail('l');
linkyList.appendToTail('e');
linkyList.printList();
console.log('Remove Duplicates')
linkyList.removeDups();
linkyList.printList();
