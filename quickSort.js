

let quickSort = function(array) {
  if (array.length <= 1) return array;
  let pivotIndex = Math.floor((array.length-1)/2);
  let pivotValue = array[pivotIndex];
  let less = []
  let more = []
  array = array.slice(0, pivotIndex).concat(array.slice(pivotIndex +1))

  for (let i =0; i< array.length; i++) {
    if(array[i] < pivotValue) {
      less.push(array[i]);
    } else {
      more.push(array[i]);
    }
  }
  return (quickSort(less)).concat([pivotValue], quickSort(more));


}

let ar = [5,2,4,6,1];
console.log(quickSort(ar))