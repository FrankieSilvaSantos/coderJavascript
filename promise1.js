let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(3);
})

let d = new Promise(function(cumprirPromessa2){
    cumprirPromessa2(['Ana','Bea','Vic','Joao'])
})



console.log(p);
console.log(d);


function primeiroElemento(array) {
    return array[0];
}
 
console.log('============');
p.then(function(valor) {
    console.log(valor)
})

d.then(function(valor2) {
    console.log(valor2)
})

d.then(function(valor2) {
    console.log(valor2[0])
})



