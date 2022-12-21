const pilotos = ['vettel', 'Alonso','Raikonnen','Massa'];

pilotos.pop() // remove o ultimo elemento do array
console.log(pilotos);

pilotos.push('Verstappen');  //adiciona elemento na ultima posição do array
console.log(pilotos); 

pilotos.shift(); //remove o primeiro elemento da lista
console.log(pilotos);

pilotos.unshift('Hamilton');   // adiciona um elemento na primeira posição do array
console.log(pilotos);

pilotos.splice(2,0, 'Bottas','Massa'); // no indice 2, nao ira remover ninguem(2,0,), dps adicionou a partir do
console.log(pilotos); // indice 2

pilotos.splice(3,1);
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); // criar um novo array baseado no indice 2 do array pilotos
console.log("Alguns pilotos: ",algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1,4); // gerar um novo array com os elementos do apartir do indice 1
console.log(`Alguns pilotos2: ${algunsPilotos2}`); // ao 3