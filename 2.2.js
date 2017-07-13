// kth to last element of singly linked list

//better way 2 pointers, k steps apart
class linkedList {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

const findKthToLast = (k, headNode) => {
  let current = headNode
  let length = 0
  //first loop to get length
  //then go to kth to last
  while (current != null) {
    length++
    current = current.next
  }
  let elementIndex = length - k
  let currentIndex = 0;
  current = headNode
  while (current != null) {
    if (currentIndex === elementIndex) {
      console.log(current.data)
    }
    currentIndex++
    current = current.next
  }

}


// create new LL nodes
let a = new linkedList('1');
let b = new linkedList('2');
let c = new linkedList('3');
let d = new linkedList('4');
let e = new linkedList('5');

//link nodes
a.next = b
b.next = c
c.next = d
d.next = e

findKthToLast(3, a)

