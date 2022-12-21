let aprovados = new Array('Bia','Carlos','Ana');

console.log(aprovados);

aprovados = ['Bia','Carlos','Ana'];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

console.log("------------");
aprovados[3] = 'Pauolo';
aprovados.push('Abia');
console.log(aprovados.length);

aprovados[9] = 'Rafael';
console.log(aprovados.length);
console.log(aprovados);

console.log("------------");
aprovados.sort();
console.log(aprovados);


console.log("------------");
delete aprovados[1];
console.log(aprovados[1]);
console.log(aprovados[2]);

console.log("--------------");

aprovados = ['Bia', 'Carlos', 'Ana'];
aprovados.splice(1,2, 'Elemento1', 'Elemento 2'); // excluir a partir do indice 1, 2 elementos. e dps adiciona
console.log(aprovados);