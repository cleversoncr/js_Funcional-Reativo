// let p = new Promise(function (cumprirPromessa) {
//   cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Cleverson'])
// });

// p
// .then(valor => valor[0])
// .then(primeiro => primeiro[0])
// .then(letra => letra.toLowerCase())
// .then(letraMinuscula => console.log(letraMinuscula))

let p = new Promise(function (resolve) {
  resolve(['Ana', 'Bia', 'Carlos', 'Cleverson'])
});

const primeiroElemento = arrayOuString => arrayOuString[0];
const letraMinuscula = letra => letra.toLowerCase();

p
  .then(primeiroElemento)
  .then(primeiroElemento)
  .then(letraMinuscula)
  // .then(v => console.log(v))
  .then(console.log)