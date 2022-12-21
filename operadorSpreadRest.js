// operador ... rest(juntar)/ spread (espalhar)

const funcionario = {nome: 'Maria', salario: 12348.99};

const clone = {ativo: true, ...funcionario};
console.log(clone);

// spread contexto de array

const grupoA = ['Joao','Pedro','Gloria'];
const grupoFinal = ['Maria','Rafaela',...grupoA];

console.log(grupoFinal);


