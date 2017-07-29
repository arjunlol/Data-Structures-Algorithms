function mergeSort (array) {
  if (array.length < 2) {
    return array;
  }
  let center = array.length % 2 === 0 ? array.length/2 : array.length/2 - 1
  return merge(mergeSort(array.slice(0, center)), mergeSort(array.slice(center, array.length)))
}

function merge(left, right) {
  let result = [];

  while (left.length !== 0 && right.length !== 0) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while(left.length !==0) result.push(left.shift());
  while(right.length !==0) result.push(right.shift());

  return result;
}


console.log(mergeSort([2,1,4,5,3]));