const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
];

const todosBolsistas = (resultado,bolsista) => resultado && bolsista;
const resultado = alunos.map(b => b.bolsista).reduce(todosBolsistas);

console.log(resultado);

const algumBolsista = (resultado,bolsista) => resultado || bolsista;
const resultado2 = alunos.map(b => b.bolsista).reduce(algumBolsista);

console.log(resultado2);