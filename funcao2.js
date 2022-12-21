// armazenando uma função em uma variavel

const imprimirSoma = function (a,b) {
    console.log(a + b);
}

imprimirSoma(2,3);


console.log("");
console.log("armazenando uma arrow function em uma variavel");

const soma = (a,b) =>{
    return a + b;
}

console.log(soma(2,3));

console.log("");
console.log("Arrow function com retorno implicito pois só possui uma sentença de codigo");

const subtracao = (a,b) => a - b
console.log(subtracao(2,3));

console.log("");
console.log("Outro exemplo reduzido de arrow function")


const imprimir2 = a => console.log(a)
imprimir2('Aprendendo arrow function');