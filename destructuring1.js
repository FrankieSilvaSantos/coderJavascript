const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa;  // retirando do "objeto pessoa", as variaveis nome e idade (destructuring)
console.log(nome,idade);

const {nome: n, idade: i} = pessoa; // atribuindo nome "n" a variavel nome e "i" a variavel idade
console.log(n,i);

const {endereco: {logradouro,numero}} = pessoa;
console.log(logradouro,numero);