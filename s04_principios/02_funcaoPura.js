/*
 Uma função pura é uma função em que o valor
 de retorno é determinado APENAS por seus valores
 de entrada, sem efeitos colaterais observáveis
 */

//Função pura ou impura? Impura - Sempre que dependermos de uma função indeterminista, ela será impura.

function gerarNumerAleatorio(min, max) {
  const fator = max - min + 1
  return parseInt(Math.random() * fator) + min
}

console.log(gerarNumerAleatorio(1, 1000))
console.log(gerarNumerAleatorio(1, 1000))
console.log(gerarNumerAleatorio(1, 1000))
console.log(gerarNumerAleatorio(1, 1000))
console.log(gerarNumerAleatorio(1, 1000))