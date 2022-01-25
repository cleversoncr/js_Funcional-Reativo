function bomDia() {
  console.log('Bom dia!')

};

const boaTarde = function () {
  console.log('Boa tarde!')

};

// 1) Passar uma função como parâmetro pra outra função
function executar(fn) {
  if (typeof fn === 'function') {
    fn()
  };

};

executar(3);
executar(bomDia);
executar(boaTarde);

// 2) Retornar uma função a partir de uma outra função

function potencia(base) {
  return function (exp) {
    return Math.pow(base, exp)
  };
};

const potenciaDe2 = potencia(2);
console.log(potenciaDe2(8));

const pot34 = potencia(3)(4);
console.log(pot34);