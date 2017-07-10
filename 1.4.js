//is string a permutation of a palindrome

//hash table?
//even # chars, except for middle
//strings w even must have even # letters, odd must have 1 odd
//hash table to keep track of counts


isPermPalin = (str) => {
  let charCounts = {};
  let odds = 0;
  for (letter of str.toLowerCase()) {
    if (letter === " ") {
      continue
    }
    charCounts[letter] = charCounts[letter] + 1 || 1
  }

  Object.keys(charCounts).forEach((key) => {
    if(charCounts[key] % 2 !== 0) {
      odds++
    }
  })

  if (odds > 1) {
    return false
  }

  return true
}

console.log(isPermPalin('Tact Coa'))