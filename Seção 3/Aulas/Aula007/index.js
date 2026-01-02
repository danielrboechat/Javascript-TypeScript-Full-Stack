function zeroAEsquerda (num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data1) {
  const dia = zeroAEsquerda(data1.getDate());
  const mes = zeroAEsquerda(data1.getMonth() + 1);
  const ano = zeroAEsquerda(data1.getFullYear());
  const hora = zeroAEsquerda(data1.getHours());
  const min = zeroAEsquerda(data1.getMinutes());
  const seg = zeroAEsquerda(data1.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data1 = new Date();
const dataBrasil = formataData(data1);
console.log(dataBrasil);

const data2 = new Date('2000-05-04 20:12:59.100')
console.log('Dia', data2.getDate())
console.log('Mês', data2.getMonth() +1) // Mês começa do zero
console.log('Ano', data2.getFullYear())
console.log('Hora', data2.getHours())
console.log('Min', data2.getMinutes())
console.log('Seg', data2.getSeconds())
console.log('ms', data2.getMilliseconds())
console.log('Dia da Semana', data2.getDay()) // 0 - Domingo, 6 - Sábado
console.log(data2.toString())
console.log(Date.now())