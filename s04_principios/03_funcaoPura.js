/*
 Uma função pura é uma função em que o valor
 de retorno é determinado APENAS por seus valores
 de entrada, sem efeitos colaterais observáveis
 */

//Função pura ou impura? Pura - Previsível e fácil de se testar

function somar(a, b) {
  return a + b
}

console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(somar(68, 31))


let qtdeEcecucoes = 0

function soma(a, b) {
  qtdeEcecucoes++ //efeitos colaterais observáveis
  return a + b
}

console.log(qtdeEcecucoes)
console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(qtdeEcecucoes)