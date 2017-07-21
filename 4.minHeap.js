class MinHeap {
  constructor() {
    this.heap = [];
    this.size = 0;
  }

//when you add element add at bottom then keep swapping up
//when you remove an element swap with bottom element then keep swapping down
//map from index to left child, right child parent
  parent(index) {
    return Math.ceil((index-2)/2);
  }

  left(index) {
    return (index*2)+1;
  }

  right(index) {
    return index*2 +2;
  }

  swap(index1, index2) {
    let tmp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = tmp;
  }

  peak() {
    //return min element (root)
    return this.heap[0];
  }

  poll() {
    this.heap.shift();
    this.size--;
    heapifyDown();
  }

  add(data){
    this.heap.push(data);
    this.size++;
    heapifyUp;
  }

  heapifyUp() {
    let index = this.size - 1;
    while (this.heap[index] < this.heap[this.parent(index)]) {
      swap(index, this.parent(index));
      index = this.parent(index);
    }
  }

  heapifyDown() {
    let index = 0;
    while(smallerIndex) {
      let smallerIndex = this.left(index);
      if (this.heap[smallerIndex] > this.heap[this.right(index)]) {
        smallerIndex = this.right(index);
      }
      if((this.heap[index]) < this.heap[smallerIndex]) {
        break;
      } else {
        this.swap(index, smallerIndex)
      }
      index = smallerIndex;
    }
  }
}