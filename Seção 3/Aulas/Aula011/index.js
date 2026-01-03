const frutas = ['Maçã', 'Pêra', 'Uva'];
const novasFrutas = frutas.map(el => el.toLowerCase());
console.log(novasFrutas); // [ 'maçã', 'pêra', 'uva' ]

const frutas2 = ['Maçã', 'Pêra', 'Uva', 'Banana', 'Morango', 'Caju'];

for(let i = 0; i<frutas.length; i++){
  console.log(`Índice ${i}`, frutas[i])
}

for(let i = 0; i<=10; i++){
  const par = i % 2 === 0 ? 'par' : 'ímpar'
  console.log(i, par)
}