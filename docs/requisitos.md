# 📋 Documento de Requisitos - Lista de Tarefas

Este documento descreve as funcionalidades e restrições do aplicativo web "Lista de Tarefas", desenvolvido pela equipe (Gregory, Luiz, Henrique).

## 1. Requisitos Funcionais (RF)
Os Requisitos Funcionais descrevem **o que** o sistema deve fazer (as ações que o usuário pode realizar).

* **RF01:** O sistema deve permitir que o usuário insira uma nova tarefa através de um campo de texto.
* **RF02:** O sistema deve adicionar a tarefa à lista quando o usuário clicar no botão "Inserir".
* **RF03:** O sistema deve permitir que o usuário adicione a tarefa pressionando a tecla `Enter` no teclado.
* **RF04:** O sistema deve exibir todas as tarefas adicionadas em formato de lista.
* **RF05:** O sistema deve fornecer um botão (ex: um "X") ao lado de cada tarefa para que o usuário possa deletá-la.
* **RF06:** O sistema deve permitir alternar entre o "Modo Claro" e o "Modo Escuro" através de um botão no cabeçalho.

## 2. Requisitos Não Funcionais (RNF)
Os Requisitos Não Funcionais descrevem **como** o sistema deve ser (qualidade, desempenho, tecnologias e visual).

* **RNF01:** O sistema deve ser desenvolvido utilizando apenas HTML5, CSS3 e JavaScript (Vanilla), sem uso de frameworks externos.
* **RNF02:** O sistema deve ter um design responsivo, adaptando-se corretamente a telas de computadores, tablets e smartphones (Mobile First).
* **RNF03:** A interface deve utilizar a fonte "Poppins" do Google Fonts para garantir uma leitura agradável e visual moderno.
* **RNF04:** O feedback visual deve ser claro (ex: o cursor do mouse deve mudar para `pointer` ao passar sobre botões e os botões devem ter efeito de *hover*).

## 3. Regras de Negócio (RN)
As Regras de Negócio são as condições que o sistema precisa verificar antes de executar uma ação.

* **RN01 (Validação de Entrada):** O sistema não deve permitir a inclusão de uma tarefa vazia ou composta apenas por espaços em branco.
* **RN02 (Limite de Caracteres):** (Opcional) A tarefa não deve ultrapassar um limite muito longo que quebre o layout da página.

## 4. Histórias de Usuário (User Stories)
Descrevem as funcionalidades sob a perspectiva de quem vai usar o site:

1. *"Como um usuário, eu quero digitar uma tarefa e apertar Enter para não esquecer o que preciso fazer hoje."*
2. *"Como um usuário, eu quero clicar no 'X' para remover uma tarefa que eu já concluí e manter minha lista limpa."*
3. *"Como um usuário noturno, eu quero ativar o Modo Escuro para não cansar minha visão enquanto vejo minhas tarefas à noite."*