const escola = "Cod3r";

console.log(escola.charAt(4));  // pega a string no indice 4

console.log(escola.charCodeAt(3)); // retorna o codigo unicode do character

console.log(escola.indexOf('d')); // retorna o indice de onde está o character

console.log(escola.substring(1)); // retorna a partir do indice 1 o resto dos characteres

console.log(escola.substring(0,3));  // retorna os characteres do indice 0 ao 3(sem incluir o 3)

console.log("Escola ".concat(escola).concat("!")); // concatena valores

console.log(escola.replace(3,"e")); // substituir um valor

console.log("Ana,Maria,Joao".split(',')); //transforma em um array