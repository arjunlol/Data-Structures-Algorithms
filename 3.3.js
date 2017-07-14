const Stack = require('./3.stack.js')

class SetOfStack extends Stack {
  constructor(capacity) {
    this.capacity = capacity
    this.stacks = []
    this.currentStack = 0;
  }

  push() {

  }
}

let plateStack = new SetOfStack(3);
