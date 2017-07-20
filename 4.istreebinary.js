const BST = require('./4.bst.js')

function isTreeBinary(treeRoot, lBound = Number.NEGATIVE_INFINITY, rBound = Number.POSITIVE_INFINITY) {
  if (treeRoot.data === null) {
    return true;
  }

  if (treeRoot.left !== null) {
    leftBST = isTreeBinary(treeRoot.left, lBound, treeRoot.left.data)
  } else {
    leftBST = true;
  }

  if(treeRoot.right !== null){
    rightBST = isTreeBinary(treeRoot.right, treeRoot.right.data, rBound)
  } else {
    rightBST = true;
  }

  if (leftBST && rightBST) {
    if(treeRoot.data >= lBound && treeRoot.data <= rBound) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

let bst = new BST();
bst.insert('6')
bst.insert('1')
bst.insert('4')
bst.insert('9')
console.log(isTreeBinary(bst.root));