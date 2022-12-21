function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Laptop',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log("Produto: ",produto.getPreco());

const carro = {
    preco: 49990,
    desc: 0.20
}

console.log("Carro: ",getPreco.call(carro));
console.log(getPreco.apply(carro));

console.log(getPreco.apply(carro, [0.17, '$']))