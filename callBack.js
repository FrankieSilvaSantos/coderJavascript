const fabricantes = ["Mercedes", "audi","BMW"];

const imprimir = function(nome,indice) {           // outra maneira function imprimir(nome,indice) {}
    console.log(`${indice + 1} nome: ${nome}`);
}

fabricantes.forEach(imprimir); // for each é um callback chamando a função

fabricantes.forEach(fabricante => console.log(fabricante));