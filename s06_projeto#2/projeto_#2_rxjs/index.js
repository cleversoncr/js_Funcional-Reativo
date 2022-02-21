const path = require('path')
const fn = require('./funcoes')
const _ = require('lodash')
const { toArray, map, groupBy } = require('rxjs/operators')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
  '.', '?', '-', ',', '"', '♪', '_', '<i>', '</i>', '\r', '[', ']', '(', ')', '!'
]

fn.lerDiretorio(caminho)
  .pipe(
    fn.elementosTerminadosCom('.srt'),
    fn.lerArquivo(),
    fn.separarTextoPor('\n'),
    fn.removerElementosSeVazio(),
    fn.removerElementoSeIniciarComNumero(),
    fn.removerSimbolos(simbolos),
    fn.separarTextoPor(' '),
    fn.removerElementosSeVazio(),
    fn.removerElementoSeIniciarComNumero(),
    groupBy(el => el),
    mergeMap(grupo => grupo.pipe(toArray())),
    map(palavras => ({elemento: palavras[0], qtde: palavras.lenght})),
    toArray(),
    map(array => _.sortBy(array, el => -el.qtde))
  )
  .subscribe(console.log)