//               01234567
let umaString = "Um texto"
// console.log(umaString[3])
// console.log(umaString.charAt(3))

console.log(umaString.concat(' em um lindo dia.'))
console.log(umaString.indexOf('texto'))
console.log(umaString.indexOf('o', 3))
console.log(umaString.lastIndexOf('m', 3))
console.log(umaString.replace('Um', 'Outro'))
console.log(umaString.length)

umaString = 'o rato roeu a roupa do rei de roma.'

console.log(umaString.slice(7,-3))
console.log(umaString.slice(-5,-1))
console.log(umaString.substring(umaString.length -5, umaString.length -1))
console.log(umaString.split(' ', 3))