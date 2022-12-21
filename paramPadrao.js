function soma1(a,b,c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c;
}

console.log(soma1());
console.log(soma1(3)); // nao passou valor para os outros logo receberam o 1
console.log(soma1(1,2,3));
console.log(soma1(0,0,0)); // por o 0 ser entendido como falso, vai receber o valor de 1 do "ou"

console.log("")
console.log("---------Gerar valor padrao estrategias------------");

function soma2(a,b,c) {
    a = a !==undefined ? a : 1
    b = 1 in arguments ? b : 1;
    c = isNaN(c) ? 1 : c;
    return a + b + c;
}

console.log(soma2());
console.log(soma2(3));
console.log(soma2(1,2,3));


// com valor padrao do javascript atualizado

console.log("");
console.log("---------valor padrao javascript atualização--------")

function soma3(a=1,b=1,c=1) {
    return a + b + c;
}

console.log(soma3());
console.log(soma3(1,2,3));
console.log(soma3(3));
console.log(soma3(0,0,0));