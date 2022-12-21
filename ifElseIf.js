Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim;
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de honra');
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado');
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação');
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado');
    } else {
        console.log('Nota invalida');
    }

    console.log('fim');
}

imprimirResultado(10);
imprimirResultado(8.9);
imprimirResultado(6.55);
imprimirResultado(2.3);
imprimirResultado(-1);




/* console.log('com arrow function---------------');

Number.prototype.entre2 = (inicio2, fim2) => {
    return this >= inicio2 && this <= fim2;
}

const imprimirResultado2 = nota2 => {
    if (nota2.entre2(9, 10)) {
        console.log('Quadro de honra')

    } else if (nota2.entre2(7, 8.99)) {
        console.log('Aprovado')

    } else if (nota2.entre2(4, 6.99)) {
        console.log('Recuperacão')

    } else if (nota2.entre2(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota invalida')
    }
    console.log('fim')
}

imprimirResultado2(10.0);
imprimirResultado2(8.5); */

