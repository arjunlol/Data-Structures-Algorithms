const Stack = require('./3.stack.js')
//implement queue using 2 stacks

class Queue {
  constructor() {
    this.stack = new Stack();
    this.queue = new Stack();
    this.state = false //false if on add state
  }

  add(data) {
    this.stack.push(data);
  }

  //need oldest stack item
  remove() {
    if (!this.state) {
      while(!this.stack.isEmpty()) {
        this.queue.push(this.stack.pop());
      }
      this.state = true;
    }
    return this.queue.pop();
  }

  peak() {
    if(!this.state) {
            while(!this.stack.isEmpty()) {
        this.queue.push(this.stack.pop());
      }
      this.state = true;
    }
    return this.queue.peak();
  }
}