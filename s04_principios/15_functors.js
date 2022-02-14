/**
  Wrapper (algo que envolve alguma coisa, container)
  Functors são objetos que implementam a função MAP
  que também é um valor "wrapper" de um valor
*/

//ARRAY é um exemplo de FUNCTORS
const nums = [1, 2, 3, 4, 5, 6];
const novosNums = nums
  .map(el => el + 10)
  .map(el => el * 2)

console.log(nums, novosNums)

function tipoSeguro(valor) {
  return {
    valor,
    invalido() {
      return this.valor === null || this.valor === undefined
    },
    map(fn) {
      if (this.invalido()) {
        return tipoSeguro(null)
      } else {
        const novoValor = fn(this.valor)
        return tipoSeguro(novoValor)
      }
    }
  }
}

const original = 'Esse é um texto';
const resultado = tipoSeguro('Esse é um texto')
  .map(t => t.toUpperCase())
  .map(t => `${t}!!!`)
  .map(t => t.split('').join(' '))
console.log(original, resultado.valor)