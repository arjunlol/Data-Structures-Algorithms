//all spaces to %20

spaceConvert = (string) => {
  arr = string.split(" ")
  str2 = arr.join("%20")
  console.log(str2)
}
spaceConvert("Mr John Smith      ")