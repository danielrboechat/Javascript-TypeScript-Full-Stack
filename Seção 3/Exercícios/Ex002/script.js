const fullDate = document.querySelector('#full-date')
const data = new Date()
let dia = data.getDate()
dia = zeroAEsquerda(dia)
let diasem = data.getDay()
diasem = calcDiaSem(diasem)
let mes = data.getMonth()
mes = calcMes(mes)
const ano = data.getFullYear()
let hora = data.getHours()
hora = zeroAEsquerda(hora)
let min = data.getMinutes()
min = zeroAEsquerda(min)
fullDate.innerHTML = `${diasem}, ${dia} de ${mes} de ${ano} às ${hora}:${min}`

function zeroAEsquerda(zero){
    return zero < 10 ? `0${zero}` : zero 
}

function calcDiaSem(diasem){
    switch (diasem){
    case 0:
        diasem ='Domingo'
        return diasem
    case 1:
        diasem ='Segunda-feira'
        return diasem
    case 2:
        diasem ='Terça-feira'
        return diasem
    case 3:
        diasem ='Quarta-feira'
        return diasem
    case 4:
        diasem ='Quinta-feira'
        return diasem
    case 5:
        diasem ='Sexta-feira'
        return diasem
    case 6:
        diasem ='Sábado'
        return diasem
    default:
        diasem ='Inválido'
        return diasem
}
}

function calcMes(mes){
    switch (mes){
    case 0:
        mes ='Janeiro'
        return mes
    case 1:
        mes ='Fevereiro'
        return mes
    case 2:
        mes ='Março'
        return mes
    case 3:
        mes ='Abril'
        return mes
    case 4:
        mes ='Maio'
        return mes
    case 5:
        mes ='Junho'
        return mes
    case 6:
        mes ='Julho'
        return mes
    case 7:
        mes ='Agosto'
        return mes
    case 8:
        mes ='Setembro'
        return mes
    case 9:
        mes ='Outubro'
        return mes
    case 10:
        mes ='Novembro'
        return mes
    case 11:
        mes ='Dezembro'
        return mes
    default:
        mes ='Inválido'
        return mes
}
}