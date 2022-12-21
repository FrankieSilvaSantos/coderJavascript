const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar();

const falarDePessoa = pessoa.falar.bind(pessoa); // vinculou o falarDePessoa com a const pessoa
falarDePessoa();