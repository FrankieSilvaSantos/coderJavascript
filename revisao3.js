// ES8 Objects.values/Objects.entries

const obj = {a:1,b:2,c:3};

console.log(Object.values(obj));

console.log(Object.entries(obj)); // retorna uma matriz

// melhoria notação literal

const nome = 'Joshua';
const pessoa = {
    nome,
    ola() {
        return 'Fala meu nobre'
    }
}

console.log(pessoa.nome,pessoa.ola());


//class

class Animal {};
class Cachorro extends Animal {
    fala() {
        return 'meow meow';
    }
}

console.log(new Cachorro().fala());