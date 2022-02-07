/*
 Uma função pura é uma função em que o valor
 de retorno é determinado APENAS por seus valores
 de entrada, sem efeitos colaterais observáveis
 */

const PI = 3.141592653589793

//Pura ou impura? => Impura - O PI é um valor externo!
function areaCirc(raio) {
  // return raio * raio * PI
  return raio * raio * Math.PI //estável
}

//Pura
function areaCircPura(raio, pi) {
  return raio * raio * pi
}

console.log(areaCirc(10))
console.log(areaCircPura(10, 3.14))


