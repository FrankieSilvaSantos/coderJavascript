function gerarNumerosEntre(min,max) {
    if(min > max) {
        [max,min] = [min,max]
    }
        return new Promise(resolve => {
            setTimeout(function() {
                const aleatorio = parseInt(Math.random() * (max - min +1)) + min
            resolve(aleatorio)
            },3000);
        })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1,60,4000), //entre 1 e 60 em 4 segundos
        gerarNumerosEntre(1,60,1000),
        gerarNumerosEntre(1,60,500),
        gerarNumerosEntre(1,60,100),
        gerarNumerosEntre(1,60,1500)
    ])
}

console.time('promise')

gerarVariosNumeros()
.then(numeros => console.log(numeros))
.then(() => {
    console.timeLog('promise')
    console.timeEnd('promise')
})