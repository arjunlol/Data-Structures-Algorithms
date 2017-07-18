//tree of minimal height
const BST = require('./4.bst')

const insertBalanced = (array, start, end) => {
  console.log(array.length)
  if (array.length === 0) {
    return null;
  }

  let midIndex = Math.ceil((array.length-1) / 2);
  let bst = new BST();
  bst.insert(array[midIndex]);


  let leftArray = array.slice(0, midIndex);
    let rightArray = array.slice(midIndex + 1, array.length);
  }
  bst.insert(insertBalanced(leftArray))
  bst.insert(insertBalanced(rightArray))
  return bst;
}


insertBalanced([1,2,3,4,5])

