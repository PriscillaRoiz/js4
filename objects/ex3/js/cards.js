class Cards {
    constructor(receita) {
        this.receita = receita;
    }
    render(){
      const Card = `<div class = "cards">
      <img class = "img-rounded" src=${this.receita.imagem} />
      <h2>${this.receita.titulo}</h2>
      <p class> = "ingredientes" ${this.receita.ingredientes}</p>
        </div>`

      document.getElementById(".cards").insertAdjacentHTML("beforeend",card)
    }
  }
