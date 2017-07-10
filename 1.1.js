//algortihm determine if string has all unique chars?
//what if cannot use more data structures


//unicode ascii?
// return false immediate if length > 128 char alphabet

//On2
isUnique = (string) => {
  for (let i = 0; i < string.length; i++) {
    for (let j = i+1; j < string.length; j++) {
      if (string[i] === string[j]) {
        return false
      }
    }
  }
  return true
}

console.log(isUnique('lhelo'));