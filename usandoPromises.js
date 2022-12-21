const http = require('http');

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
   return new Promise((resolve,reject) => { // resolve a promise é atendida e reject a promise é rejeitada
    http.get(url,res => {   //res = resposta
        let resultado = '';
        res.on('data',dados => {
            resultado += dados;
        })
        res.on('end',() => {
            try {
                resolve(JSON.parse(resultado))

            } catch(e) {
                reject(e);
            }
        })
    })
   })
}

/*let nomes = [];
getTurma('A').then(alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`));
    
    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(b => `B: ${b.nome}`));
        
        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map(c => `C: ${c.nome}`));
            console.log(nomes);
        })
    })
});*/
console.log('------------------------');

Promise.all([getTurma('A'),getTurma('B'),getTurma('C')])
.then(x => console.log(x))
.then(turmas => [].concat(...turmas))
.then(alunos => alunos.map(aluno => aluno.nome))
.then(nomes => console.log(nomes))