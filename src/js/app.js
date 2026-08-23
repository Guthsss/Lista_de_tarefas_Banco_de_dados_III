function adicionarTarefa() {
    let tarefaInput = document.querySelector("input").value
    let li = createElement("li")

    li.innerHTML = tarefaInput + "<span>❌</span>"

    console.log(li)
    
    document.querySelector("ul").appendChild(li)

    tarefaInput = ""
}

