function enviar(){
    function cadastro(nome, sobrenome, peso, altura){
    return{
        nome, sobrenome, peso, altura
    }
}
    const pessoa = cadastro(document.getElementById('nome').value, document.getElementById('sobrenome').value,  document.getElementById('peso').value, document.getElementById('altura').value)

    let res = document.getElementById('res')
    res.innerHTML += `<p>Olá eu sou ${pessoa.nome} ${pessoa.sobrenome}, peso ${pessoa.peso}Kg e tenho ${pessoa.altura} de altura.</p>`
   
    document.getElementById('form').reset()
    document.getElementById('nome').focus()
}
   
// Como o professor fez?
// function meuEscopo () {
//   const form = document.querySelector('.form');
//   const resultado = document.querySelector('.resultado');

//   const pessoas = [];

//   function recebeEventoForm (evento) {
//     evento.preventDefault();

//     const nome = form.querySelector('.nome');
//     const sobrenome = form.querySelector('.sobrenome');
//     const peso = form.querySelector('.peso');
//     const altura = form.querySelector('.altura');

//     pessoas.push({
//       nome: nome.value,
//       sobrenome: sobrenome.value,
//       peso: peso.value,
//       altura: altura.value
//     });

//     console.log(pessoas);

//     resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ` +
//       `${peso.value} ${altura.value}</p>`;
//   }

//   form.addEventListener('submit', recebeEventoForm);
// }
// meuEscopo();