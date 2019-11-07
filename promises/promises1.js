function falarDepoisDe (segundos, frase) {
    return new Promise ((resolve,reject) => {
        if (segundos > 10){
            reject("Mutio tempo de espera")
        }
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3,"Hm, esperei para falar").then(frase => console.log(`${frase} - vim da promise`)).catch(e => console.log (e)) 