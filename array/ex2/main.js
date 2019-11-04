
const nomesNoRole =['Adriana',
'Adrielly',
'Aline',
'Ana',
'Angelica',
'Ba',
'Babs',
'Carolzinha',
'Carolzona',
'Cecilia',
'Daiana',
'Emanuelle',
'Jackeline',
'Jennifer',
'Josiane',
'Lia',
'Marcela',
'Monique',
'Priscilla Roiz Garcia',
'Priscilla Soares Alves',
'Raissa',
'Raquel',
'Romênia',
'Rosana',
'Simara',
'Simone',
'Talita',
'Telma',
'Thaís',
'Valdeniza']

// let input = document.querySelector("input")
// let button = document.querySelector("button")

// button.addEventListener("click", function () {
//     event.preventDefault();

// if(nomesNoRole.indexOf(input.value) > -1){
//     console.log("Bem vinda!!")
//     } else{
//     console.log("Não é bem vinda!!")
// }
// })

const validacao = (nome) => {
    if (nome.trim() === "") throw "O campo está vazio"
}

document.getElementById("form-do-role").addEventListener("submit", function(e){
    e.preventDefault()

    let valorCampo = document.getElementById("nome").nodeValue
    try {
        validacao(valorCampo)
    } catch (erro) {
        console.log("Deu ruim!")
    }
})