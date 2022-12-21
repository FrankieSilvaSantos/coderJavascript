for (letra of 'cod3r') {
    console.log(letra);
}

console.log('===================');

const assuntosEcma = ['Map','Set','Promise'];

for (i of assuntosEcma) {
    console.log(i);
}

console.log('===================');

const assuntosMap = new Map([
    ['Map',{abordado: true}],
    ['Set',{abordado: true}],
    ['Promise',{abordad:false}]

])

for (let assunto of assuntosMap) {
    console.log(assunto);
}

console.log('===================');

for (let chave of assuntosMap.keys()) {
    console.log(chave);
}

console.log('===================');

for (let valor of assuntosMap.values()) {
    console.log(valor);
}

console.log('===================');

for (let [ch,vl] of assuntosMap.entries()) {
    console.log(ch,vl);
}