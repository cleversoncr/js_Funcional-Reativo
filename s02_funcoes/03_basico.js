// arrow function 

// Sempre anônima

//Quando não tiver nenum parâmetro, usamos um par de parênteses
const felizNatal = () => console.log('Feliz Natal!');
felizNatal()

//Se tiver apenas um parâmetro, pode construir sem o parênteses
const saudacao = nome => `Fala ${nome}, blz?!`;
console.log(saudacao('Cleverson'))

// Escrita normal, para comparar
function saudacao2(nome) {
  return `Fala ${nome}, blz?!`;
}

console.log(saudacao2('Cleverson'));

//Sempre que tiver um corpo que precisa retornar algo, associado a uma função arrow, utilizar RETURN
const somar = (numeros) => {
  let total = 0
  for (let n of numeros) {
    total += n
  }
  return total
};

console.log(somar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// function potencia(base) {
//   return function(exp) {
//     return Math.pow(base, exp)
//   }
// };

const subtrair = (a, b) => a - b;
console.log(subtrair(3, 2));


const potencia = base => exp => Math.pow(base, exp)

console.log(potencia(2)(10));

// this

Array.prototype.ultimo = function () {
  console.log(this[this.length - 1])
}

const numero = [1, 2, 3]
numero.ultimo()