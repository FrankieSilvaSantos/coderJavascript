function rand ({min = 0, max = 1000}) {   // objeto dentro da função
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand({max: 50, min: 40}));

const obj = {min: 40, max: 50};
console.log(rand(obj));

console.log(rand({min: 950}));