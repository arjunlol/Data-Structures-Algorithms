//function check if list palindrome
//search for even/odd

class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

function checkPalindrome(headNode) {
//keep track of how many odd counts
  let current = headNode;
  let counts = {}
  let odds = 0;
  let evenOdd = {}
  //let false rep even, true odd
  while(current != null) {
    if (!evenOdd[current.value]) {
      evenOdd[current.value] = true
      odds++
    } else {
      evenOdd[current.value] = false
      odds--
    }
    current = current.next
  }

  if (odds > 1) {
    console.log(false)
  } else {
    console.log(true)

  }
}


let a = new Node('a')
let b = new Node('b')
let c = new Node('b')
let d = new Node('a')

a.next = b
b.next = c
c.next = d

checkPalindrome(a)














