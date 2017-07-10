//compress string

compressString = (str) => {
  let strComp = str[0];
  let letterCounter = 1;
  let returnSame = true
  for (let index = 1; index < str.length; index++) {
    if (str[index] === str[index-1]) {
      letterCounter++
      if (letterCounter > 1) {
        returnSame = false;
      }
    } else {
      strComp += letterCounter
      strComp += str[index]
      letterCounter = 1
    }
  }
  strComp += letterCounter
  return returnSame ? str : strComp
  return strComp
}

console.log(compressString("abcd"))
//should return a2b1c5a3s