const form = document.querySelector('form#form')

form.addEventListener('submit', (evento) => {
    evento.preventDefault()
    const peso = Number(evento.target.querySelector('#peso').value)
    const altura = Number(evento.target.querySelector('#altura').value)
    if(!validador(peso, altura)){
        const p = crieP()
        escreva(p, `Valores inválidos`)
    } else{
        const imc = calcIMC(peso, altura)
        const nivel = compVal(imc)
        const p = crieP()
        escreva(p, `Seu IMC é: ${imc} ${nivel}`)
}
})

function validador(peso, altura){
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) return false
    return true
}

function calcIMC(peso, altura){
    let imc = peso / altura ** 2
    imc = Number(imc.toFixed(2))
    return imc
}

function compVal(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3']
    if(imc < 18.5){return nivel[0]}
    if (imc < 25){return nivel[1]}
    if (imc < 30){return nivel[2]}
    if (imc < 35){return nivel[3]}
    if (imc < 40){return nivel[4]}
    if (imc >= 40) {return nivel[5]}
}

function crieP(){
    const resultado = document.getElementById('res')
    const paragrafo = document.createElement('p')
    resultado.innerHTML = ''
    resultado.appendChild(paragrafo)
    return paragrafo
}

function escreva(paragrafo, msg) {
    paragrafo.innerHTML = msg
}