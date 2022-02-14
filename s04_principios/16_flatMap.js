// const letras = ['O','l','a',' ','m','u','n','d','o','!','!','!'];

// const resultado = letras
// .map(l => l.toUpperCase())
// .reduce((a,b) => a + b,)

// console.log(resultado);


const letrasAninhadas = [
  ['O', 'l', 'a'],
  [' '],
  ['m', 'u', 'n', 'd', 'o'],
  ['!', '!', '!', '!']
];

const letras = letrasAninhadas.flat(Infinity);
// console.log(letras);

const resultado = letras
.map(l => l.toUpperCase())
.reduce((a,b) => a + b,)

console.log(resultado);