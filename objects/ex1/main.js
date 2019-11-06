class Botao {
    constructor(texto, cor, tamanho, icone) {
        this.texto = texto;
        this.cor = cor;
        this.tamanho = tamanho;
        this.icone = icone;
    }
    desenharBotao() {
            const novoBotao = document.createElement("button");
            novoBotao.setAttribute("class", `${this.cor} ${this.tamanho}`)
            if (this.icone) {
                const tagIcone = document.createElement("i");
                tagIcone.setAttribute("class", `fas ${this.icone}`)
                novoBotao.appendChild(tagIcone);
                const text = document.createTextNode(this.texto);
                novoBotao.appendChild(text);
            } else {
                novoBotao.innerHTML = this.texto;
            }
            document.getElementById("buttons-section").appendChild(novoBotao);
        }
    }

    const botaoVerde = new Botao("Enviar", "verde", "pequeno", "fa-plus")
    botaoVerde.desenharBotao();

    const botaoAzul = new Botao("Enviar", "azul", "medio", "fa-dog")
    botaoAzul.desenharBotao();

    const botaoRoxo = new Botao("Enviar", "roxo", "grande", "fa-bone")
    botaoRoxo.desenharBotao();

