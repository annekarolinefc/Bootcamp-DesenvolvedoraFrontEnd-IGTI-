var fsList = document.querySelectorAll(".multiple-field");
for (var i = 0; i < fsList.length; i++) {
    initMultipleFieldSet(fsList[i]);
}

function initMultipleFieldSet(fs) {
    //CRIANDO O BOTÃO DINAMICAMENTE
    var addButton = document.createElement("button");
    addButton.textContent = "Adicionar";
    addButton.type = "button";

    fs.appendChild(addButton);

    var firstInput = fs.querySelector("input");

    //quando ocorrer o evento clicl em adicionar
    addButton.addEventListener("click", function() {
        //adicionar um outro input
        var div = document.createElement("div");
        var newInput = document.createElement("input");
        newInput.name = firstInput.name;
        newInput.type = firstInput.type;

        //adicionar botão excluir
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Excuir";
        deleteButton.type = "button";

        div.appendChild(newInput);
        div.appendChild(deleteButton);

        deleteButton.addEventListener("click", function() {
            div.remove();
        });

        fs.insertBefore(div, addButton);
    });
}