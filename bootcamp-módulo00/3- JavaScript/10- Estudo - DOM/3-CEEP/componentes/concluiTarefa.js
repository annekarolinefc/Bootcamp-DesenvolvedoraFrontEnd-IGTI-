    //----- CRIAR COMPONENTE -----
    //parte de uma aplicação.
    //vários componentes criam uma aplicação
    const BotaoConclui = () => {
        //criando um elemento
        const botaoConclui = document.createElement('button')
            //adicionando classe ao elemento
        botaoConclui.classList.add('check-button')
            //adicionando texto ao botão
        botaoConclui.innerText = 'concluir'

        botaoConclui.addEventListener('click', concluirTarefa)
        return botaoConclui
    }
    const concluirTarefa = (evento) => {
        //captura qual elemento foi criado
        const botaoConclui = evento.target
            //sobre um nó na árvore
        const tarefaCompleta = botaoConclui.parentElement
            //metodo togle adiciona a classe done quando clicar no botão
        tarefaCompleta.classList.toggle('done')
    }

    //protege o codigo
    export default BotaoConclui