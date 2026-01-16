function toCamelCase(str){
  let arr = str.split("")
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "-" || arr[i] === "_") {
      arr[i] = ""
      i++
      arr[i] = arr[i].toUpperCase()
    }
  }
  return arr.join("")
}