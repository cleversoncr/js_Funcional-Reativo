/*
Diz-se que uma linguagem de programação possui
funções de primeira classe quando funções nessa
linguagem sção tratadas como qualquer outra variável
*/

const x = 3
const y = function(txt) {
  return `Esse é o texto: ${txt}`
}

const z = () => console.log('Zzzzzz!')

console.log(x)
console.log(y('Olá'))
z()