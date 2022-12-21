//arrow function

const soma = (a,b) => a + b;
console.log(soma(2,3));

//parametros  default

function log(texto = 'Node') {
    console.log(texto);
}

log();

// operador rest

function total(...numeros) {
    let total = 0;
    numeros.forEach(n => total += n);
    return total
}

console.log(total(1,2,3,4));