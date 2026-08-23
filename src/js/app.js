function adicionarTarefa() {
    let tarefaInput = document.querySelector("input").value
    let li = document.createElement("li")

    li.innerHTML = tarefaInput + '<span onclick="deletarTarefa(this)">❌</span>'

    document.querySelector("ul").appendChild(li)

    document.querySelector("input").value = ""
}

function deletarTarefa(elemento) {
    elemento.parentElement.remove()
}