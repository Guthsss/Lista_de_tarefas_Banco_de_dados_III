function adicionarTarefa() {
    let tarefaInput = document.querySelector("input").value
    let li = createElement("li")

    li.innerHTML = tarefaInput + '<span onclick="deletarTarefa()">❌</span>'

    console.log(li)
    
    document.querySelector("ul").appendChild(li)

     document.querySelector("input").value = ""
}

function deletarTarefa() {
    li.ParennrElement.remove()
}