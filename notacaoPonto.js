const obj1 = {};
obj1.nome = 'Bola';

function Obj(nome) {
    this.nome = nome; // transformando em publico nome
    this.exec = function() {
        console.log("exec...")
    }
}

const obj2 = new Obj('cadeira');
const obj3 = new Obj('Mesa');

console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec();