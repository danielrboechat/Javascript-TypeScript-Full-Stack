const nome = prompt('Digite seu nome completo:')

let texto = document.getElementById('adcTexto')
texto.innerHTML = `Seu nome é: ${nome} <br>`
texto.innerHTML += `Seu nome tem ${nome.length} letras <br>`
texto.innerHTML += `A segunda letra do seu nome é: ${nome[1]} <br>`
texto.innerHTML += `O primeiro índice da letra A no seu nome é: ${nome.indexOf('a')} <br>`
texto.innerHTML += `O último índice da letra A no seu nome é: ${nome.lastIndexOf('a')} <br>`
texto.innerHTML += `As três últimas letras do seu nome são: ${nome.slice(-3)} <br>`
texto.innerHTML += `As palavras do seu nome são: ${nome.split(' ')} <br>`
texto.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()} <br>`
texto.innerHTML += `Seu nome com letras minúsculas: ${nome.toLocaleLowerCase()} <br>`