//NxN matrix
// rotate 90
//each pixel 4 bytes
//can do in place?
//8 bits make a byte?

rotateMatrix = (matrix) => {

//top to right
  // 00 => 03
  // 01 => 13
  // 02 => 23
  // 03 => 33
//left to top
  // 30 => 00
  // 20 => 01
  // 10 => 02
  // 00 => 03

//right to bottom
  // 03 => 33
  // 13 => 32
  // 23 => 31
  // 33 => 30

//bottom to left
  // 33 => 30
  // 32 => 20
  // 31 => 10
  // 30 => 00
  for (let layer = 0; layer< matrix.length/2; layer++) {
    let first = layer;
    last = matrix.length - 1 - layer
    for (let i = first; i < last; i++) {
      let temp = matrix[i][last] //store right
      matrix[i][last] = matrix[layer][i] //move top to right
      matrix[layer][i] = matrix[last - i][layer] //move left to top
      matrix[last-i][layer] = matrix[last][last - i] //move bottom to left
      matrix[last][last - i] = temp //move right to bottom
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

rotateMatrix(testMatrix);

console.log('after:');
console.log(testMatrix[0]);
console.log(testMatrix[1]);
console.log(testMatrix[2]);
console.log(testMatrix[3]);
