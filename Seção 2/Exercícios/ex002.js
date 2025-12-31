const nome ='Daniel'
const sobrenome = 'Boechat'
const idade = 25
const peso = 90
const altura = 1.80
let imc = peso / altura**2
let anoNasc = new Date().getFullYear() - idade

console.log(`${nome} ${sobrenome}, nascido em ${anoNasc}, tem ${idade} anos, pesa ${peso}Kg, tem ${altura}m e seu IMC é de ${imc}`)