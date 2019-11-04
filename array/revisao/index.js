const comidas = ["lasanha", "batata", "bacon"]

console.log (comidas[2])

comidas.forEach((comida, posicao) =>{
    console.log(`Na posicao ${posicao} temos a comida: ${comida}`)
})

// concat faz copia do array e adiciona o elemento que passa como
let outrasComidas = comidas.concat("Jiló")
console.log('comidas', comidas)
console.log('outras coidas', outrasComidas)

//join - cria uma string do array e ele utiliza o argumento como separador

let stringDoArray = comidas.join(", ")
console.log(stringDoArray)

//shift - arranca o primeito item do array e retorna qual ele arrancou
//modifica permanentemente o array
console.log(comidas.shift())
console.log(comidas)

//pop - arranca o ultimo item do array e retorna o que ele deletou
//modifica permanentemente o array
console.log(comidas.pop())
console.log(comidas)

// adiciona um item na primeira posicao do array
//modifica permanentemente o array
comidas.unshift("macarrão")
console.log(comidas)

// adiciona um item na ultima posicao do array
//modifica permanentemente o array
comidas.push("strogonoff")
console.log(comidas)

//inverte o array 
comidas.reverse ()
console.log(comidas)

// faz uma copia simples delimitando o começo e o final da parte que eu quero
// slice (começo,final)
let cortaAlimentos = comidas.slice(1,2)
console.log(cortaAlimentos)
console.log(comidas)

//pode reomver e adicionar valores utilizando posicao, indice de apagar
comidas.splice(2,0,"Alface")
console.log(comidas)

//coloca em ordem 
comidas.sort()
console.log(comidas)

comidas.unshift("Batata")
console.log(comidas)
console.log(comidas.indexOf("Batata"))
console.log(comidas.lastIndexOf("Batata"))

//Nao encontrou
console.log(comidas.indexOf("Brocolis"))

let mapArray = comidas.map((comida) =>`${comida} Gostosa`)
console.log(mapArray)

let teste = comidas.forEach((comida) =>`${comida} boa` )
console.log(teste)
const numeros = [1,2,3,4,5]
let numerosDobrados = numeros.map((numeros) =>numeros*2)
console.log(numerosDobrados)


let arrayProcura = comidas.filter((comida) => comida === "Batata")
console.log(arrayProcura)

let juntaComida = comidas.reduce((esq,dir) => {
    return `${esq} e ${dir}`
})
console.log(juntaComida)

let somaNumero = numeros.reduce((esq, dir) => {
    return esq + dir
})

console.log(somaNumero)

console.log(numeros)
console.log(numeros.find(numero => ))