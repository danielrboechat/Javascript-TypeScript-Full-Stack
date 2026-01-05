const cont = document.querySelector('.container')
const div = document.createElement('div')
cont.appendChild(div)

const elementos = [
    {tag: 'section', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'p', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
]

function cria(){
    for (let i = 0; i < elementos.length; i++){
       let tag = document.createElement(elementos[i].tag)
       tag.innerHTML = `${elementos[i].texto}`
       div.appendChild(tag) 
    }


}

cria()
