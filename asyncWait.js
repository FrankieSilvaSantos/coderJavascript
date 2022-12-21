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

let obterAlunos = async() => {
    const ta = await getTurma('A');   // ta - turma a, tb - turma b, tc turma c
    const tb = await getTurma('B');
    const tc = await getTurma('C');
    return [].concat(ta,tb,tc);
}

obterAlunos().then(alunos => alunos.map(a => a.nome)).then(nomes => console.log(nomes))