const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'; // se,sim, nota >= 7 retorna 'aprovado' senao reprovado
// primeira parte do ternario é uma expressao dps a condição ? e o senao :

console.log(resultado(7.1));

console.log("--------------");

const resultado2 = nota => { // função com corpo
    return nota >= 7 ? 'Aprovado' : 'Reprovado';
}

console.log(resultado2(6.9))