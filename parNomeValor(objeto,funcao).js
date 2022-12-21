const saudacao = 'Ola';  // contexto lexico 1

function exec() { //fumcao
    const saudacao = 'Falaa galere'; // contexto lexico 2
    return saudacao;
}


const cliente = {  //objeto
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Maré',
        numero: 3333
    }
}

console.log(saudacao);
console.log(exec(saudacao));
console.log(cliente);