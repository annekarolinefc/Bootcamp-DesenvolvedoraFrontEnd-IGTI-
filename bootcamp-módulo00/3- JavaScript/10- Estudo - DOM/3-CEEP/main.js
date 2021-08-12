import BotaoConclui from "./componentes/concluiTarefa";
//FUNÇÃO CRIAR TAREFA
import BotaoDeleta from "./componentes/deletaTarefa";

const criarTarefa = (evento) => {
    //evitando refresh da página
    evento.preventDefault()
        //-- O que vai acontecer quando o evento disparar
        //percorrer o DOM e procura o elemento ul da lista
    const lista = document.querySelector("[data-list]")
        //percorre o DOM e procura o input
    const input = document.querySelector("[data-form-input]");
    //atribuir o valor a uma variável
    const valor = input.value;
    //Adicionando classe a tarefa

    const tarefa = document.createElement("li")
        //ADICIONAR ITEM A TAREFA
        //criando um paragrafo
    tarefa.classList.add('task')

    const conteudo = `<p class="content">${valor}</p>`

    tarefa.innerHTML = conteudo
    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
    lista.appendChild(tarefa)
    input.value = " "
}

const novaTarefa = document.querySelector('[data-form-buttom]');

//ELEMENTO QUE RECEBE O EVENTO:novaTarefa - EVENTO: ASSIM QUE CLICAR
novaTarefa.addEventListener("click", criarTarefa)

//EVITAR MOSTRAR REGRA DE NEGOCIO
//()=>{} ()