const aprovados = ['Agatha', 'Aldo', 'Daniel','Raquel'];

aprovados.forEach(function(nome,indice) {
    console.log(`Indice: ${indice + 1}, nome: ${nome}`);
})

console.log("-------------");

aprovados.forEach(nome => console.log(nome));