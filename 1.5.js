//insert, remove, replace char
//hash table of both and 1 mulligan?

checkOneEditAway = (str1, str2) => {
  //first check length if only 1 away or the same
  //test removal
  let mulligan = false
  if (str1.length - 1 === str2.length){
    let j = 0 //count of smaller string str2
    for (let i = 0; i < str1.length; i++) {
      if (!(str1[i] === str2[j])) {
        if (mulligan) return false
        mulligan = true
        j--
      }
      j++
    }
    return true
  }

  //test replacement
  if (str1.length === str2.length) {
    for (let i =0; i < str1.length; i++) {
      if(!(str1[i] === str2[i])) {
        if (mulligan) return false
        mulligan = true
      }
    }
    return true
  }

  if (str2.length - 1 === str1.length){
    let j = 0 //count of smaller string str2
    for (let i = 0; i < str2.length; i++) {
      if (!(str2[i] === str1[j])) {
        if (mulligan) return false
        mulligan = true
        j--
      }
      j++
    }
    return true
  }

}

console.log(checkOneEditAway('pale', 'ple'))
console.log(checkOneEditAway('pales', 'pale'))
console.log(checkOneEditAway('pale', 'bale'))
console.log(checkOneEditAway('pale', 'bae'))