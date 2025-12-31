let numero = prompt('Digite um número a seguir:')
const titulo = document.getElementById('titulo')
const texto = document.getElementById('texto')
numero = Number(numero)

titulo.innerHTML = numero
texto.innerHTML = `Raiz quadrada: ${numero ** 0.5}<br>`

if(Number.isInteger(numero) === true){
    texto.innerHTML += `${numero} é um número inteiro<br>`
} else {
    texto.innerHTML += `${numero} é um número real<br>`
}

if(Number.isNaN(numero) === true){
    texto.innerHTML += `${numero} não é um número<br>`
} else {
    texto.innerHTML += `${numero} é um número<br>`
}

texto.innerHTML += `Arredondado para baixo: ${Math.floor(numero)}<br>`
texto.innerHTML += `Arredondado para cima: ${Math.ceil(numero)}<br>`

texto.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)}<br>`
