let dobro = function(a) {
    return a * 2;
}

console.log(dobro(1))

console.log("");
console.log("Arrow function----------------")

 dobro = a => {
    return a * 2;
}

console.log(dobro(2));

console.log("");
console.log("Arrow function 2#----------------");


dobro = a => a * 2
console.log(dobro(Math.PI.toFixed(2)));

console.log("");
console.log("Arrow function 3#----------------");

let ola = function() {
    return 'Olá';
}

console.log(ola());

 let ola2 = () => {
    return 'Olá';
}
console.log(ola2());