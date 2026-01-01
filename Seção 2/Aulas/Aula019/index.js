/*
Primitivos (imutáveis) - string, number, boolean, undefined, 
null (bigint, symbol) - Valores copiados

Referência (mutável) - array, object, function - Passados por referência
*/
const a = {
  nome: 'Luiz',
  sobrenome: 'Otávio'
};
const b = a;

b.nome = 'João';
console.log(a);
console.log(b);


// let a = [1,2,3]
// let b = a
// console.log(a,b)

// a.push(4)
// console.log(a,b)

// b.pop(4)
// console.log(a,b)


// let a = 'A'
// let b = a
// console.log(a,b)

// let nome = 'Luiz'
// nome[0] = 'R'
// console.log(nome[0], nome)