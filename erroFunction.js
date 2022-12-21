function imprimirNomeGritando(obj) {
    console.log(obj.nome.toUpperCase() + "!!");
}

const obj = {
    nome: 'Paula'
};

imprimirNomeGritando(obj);



console.log("Agora com arrow function--------------");

const imprimirNomeGritando2 = obj2 => {
    return obj2.nome.toUpperCase() + "!!!";
}

const obj2 = {
    nome: "Rodolfo"
};

console.log(imprimirNomeGritando2(obj2));