function Carro(velocidadeMaxima = 200, delta = 5) {         // delta quando for acelerar o carro vai de 5 em 5
    let velocidadeAtual = 0; // atributo privado

    this.acelerar = function () { // metodo público
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima;
        }
    }
    this.getVelocidadeAtual = function() {
        return velocidadeAtual;
    }

}         

const uno = new Carro();
uno.acelerar()
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350,20);
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());