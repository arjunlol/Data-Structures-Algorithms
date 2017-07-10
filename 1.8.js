//if elem in MxN matrix = 0, row and column set to 0

setZeroIf = (matrix) => {
  zeroRow = []
  zeroCol = []
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === 0) {
        zeroRow.push(i)
        zeroCol.push(j)
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (!(zeroRow.indexOf(i) === -1) || !(zeroCol.indexOf(j) === -1)) {
        matrix[i][j] = 0
      }
    }
  }
}



/* TEST */
var testMatrix = [
[1, 2, 3, 4],
[0, 1, 2, 3],
[0, 0, 1, 2],
[1, 0, 0, 1]
];

console.log('before:');
console.log(testMatrix[0]);
console.log(testMatrix[1]);
console.log(testMatrix[2]);
console.log(testMatrix[3]);

setZeroIf(testMatrix);

console.log('after:');
console.log(testMatrix[0]);
console.log(testMatrix[1]);
console.log(testMatrix[2]);
console.log(testMatrix[3]);
