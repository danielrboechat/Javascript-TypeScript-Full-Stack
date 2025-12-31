let varA = 'A'
let varB = 'B' //a
let varC = 'C' //a
let varX


varX = varA
varA = varB // B
varB = varC // C
varC = varX // A

console.log(varA, varB, varC)


// B C A