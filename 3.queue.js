//add
//remove
//peak
//isempty

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null
    this.back = null
  }

  add(data) {
    let node = new Node(data);
    if(!this.front) {
      this.front = node;
      this.back = node;
    } else {
      let prevBack = this.back;
      this.back = node;
      prevBack.next = this.back;
    }
  }

  remove() {
    let removed = this.front;
    if (this.front === this.back) {
      this.front = null;
      this.back = null;
    } else {
      this.front = this.front.next;
    }
    return removed !== null ? removed.data : null;
  }

  peak() {
    return this.front !== null ? this.front.data : null;
  }

  isEmpty() {
    return this.front === null
  }

}

module.exports = Queue