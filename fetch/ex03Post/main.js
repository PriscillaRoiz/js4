const titulo = document.getElementById("titulo")
const descricao = document.getElementById("descricao")
const btnSubmit = document.getElementById("btn-submit")

btnSubmit.addEventListener('click', function (event) {
    event.preventDefault()
})
let body = {
    title: titulo.value,
    body: descricao.value,
    userIda: 1
}

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body
}).then(response => response.json()).then(json => console.log(json))
