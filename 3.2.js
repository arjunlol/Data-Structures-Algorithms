const Stack = require('./3.stack')

//make a new stack to keep track of min values

class stackMin {
  constructor() {
    this.stack = new Stack();
    this.minStack = new Stack();
    //current min is peak of minstack
  }

  isEmpty(){
    return this.stack.isEmpty();
  }

  push(data){
    if (this.minStack.isEmpty || this.minStack.peak() > data) {
      this.minStack.push(data);
    }
    this.stack.push(data)
  }

  pop() {
    let popped = this.stack.pop();
    if (popped === this.minStack.peak()) {
      this.minStack.pop();
    }
  }

  min() {
    return this.minStack.peak();
  }
}

let stack = new stackMin();
stack.push(1);
stack.push(2);
console.log(stack.min());
stack.push(4);
stack.pop();
stack.min();