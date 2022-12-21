const tecnologias = new Map();
tecnologias.set('react', {framework: false});
tecnologias.set('angular',{framework: true});


console.log(tecnologias.get('react').framework);

const chavesVariadas = new Map([
    [function() {},'Funcao'],
    [{},'Objeto'],
    [123,'Numero']

])

chavesVariadas.forEach((valor,chave) => {
    console.log(chave,valor);
})

console.log(chavesVariadas.has(123));