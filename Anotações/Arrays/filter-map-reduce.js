// Retorne a soma do dobro de todos os pares

// -> Filtrar pares     => [ 50, 80, 2, 8, 22 ] -> Pares
// -> Dobrar os valores     => [ 100, 160, 4, 16, 44 ] -> Dobro
// -> Reduzir (somar tudo)      => 324

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((ac, valor) => ac + valor)

console.log(numerosPares);