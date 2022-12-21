function funcionarOuNao(valor,chanceErro) {
    return new Promise((resolve,reject)=> {
        try {
        if(Math.random() < chanceErro) {
            reject('Ocorreu um erro')
        } else {
            resolve(valor)
        }
    } catch(e) {
        reject(e)
    }
    })
}

funcionarOuNao('Testando...',0.9)
.then(v => console.log(`valor: ${v}`))
.then(
    v => consol.log(v),
    err => console.log(`Erro especifico: ${err}`)
)
.catch(err => console.log(`Erro: ${err}`))
.then(() => console.log('Fim!'))