//pegar o valor do input e comparar se o input contém na lista do array


let frutas = ["banana", "morango", "bacurí", "laranja"]
let input = document.querySelector("input")
let button = document.querySelector("button")

button.addEventListener("click", function () {

    // let buscarFrutas = frutas.filter((fruta) => fruta === input.value)
    // if(buscarFrutas.length>0) {
    //     console.log("Tem!!")
    // } else{
    //     console.log("Não tem!!")
    // }

//ou

// if (frutas.find(fruta => fruta === input.value)){
//     console.log("Tem!!")
//     } else{
//     console.log("Não tem!!")
// }

//ou 

if(frutas.indexOf(input.value) > -1){
    console.log("Tem!!")
    } else{
    console.log("Não tem!!")
}
})