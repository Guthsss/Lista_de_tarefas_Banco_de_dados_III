function adicionarTarefa() {
    // pega o texto digitado no input
    let tarefaInput = document.querySelector("input").value

    // cria um novo <li>
    let li = document.createElement("li")

    // coloca o texto + botão de excluir dentro do <li>
    li.innerHTML = tarefaInput + '<span onclick="deletarTarefa(this)">❌</span>'

    // adiciona o <li> na lista
    document.querySelector("ul").appendChild(li)

    // limpa o input
    document.querySelector("input").value = ""
}

function deletarTarefa(elemento) {
    // remove o <li> pai do "x" clicado
    elemento.parentElement.remove()
}