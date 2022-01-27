const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
  { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
  { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
  { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
  { nome: 'Tesoura', qtde: 1, preco: 19.2, fragil: true }
];

//filter, map, reduce

//1. Apenas os elementos fagil: true
const getFragil = item => item.fragil !== false;
const getItem = item => item.nome;

const produtosTrue = carrinho
  .filter(getFragil)
  .map(getItem)

console.log(produtosTrue);


//2. qtde * preco -> total
const getTotal = item => item.qtde * item.preco;
const somar = (acumulador, elemento) => acumulador + elemento

const totalGeral = carrinho
  .map(getTotal)
  .reduce(somar);

console.log(totalGeral);

//3. media dos valores totais

const getTotalProdutos = item => item.qtde * item.preco;
const mediaTotal = (acumulador, elemento) => (acumulador + elemento) / 2

const mediaTotalGeral = carrinho
  .map(getTotal)
  .reduce(mediaTotal);

console.log(mediaTotalGeral);