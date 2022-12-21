// nao aceita repetição e nao é indexado

const times = new Set();

times.add('vasco');
times.add('Sao Paulo');
times.add('Palmeiras');
times.add('Corintias');
times.add('Flamengo');

console.log(times);
console.log(times.size);
console.log(times.has('vasco'));

console.log('------------------');

const nomes = ['Raquel','Julia','Lucas','Lucas'];
const nomesSet = new Set(nomes);
console.log(nomesSet);