const imprimirResultdado = function (nota) {
    if (nota >= 7) {
        console.log('Aprovado');
    } else {
        console.log('Reprovado');
    }
}

imprimirResultdado(7);
imprimirResultdado(6);

console.log('IF ELSE com arrow function------------');

const imprimirResultdado2 = nota => {
    if (nota >= 7) {
        return 'Aprovado';

    } else {

        return 'Reprovado'
    }
}

console.log(imprimirResultdado2(10));
console.log(imprimirResultdado2(5));

