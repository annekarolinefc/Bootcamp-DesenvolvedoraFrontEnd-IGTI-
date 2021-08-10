let employeesPromise = fetch("http://localhost:3000/employees"); //lista de funcionarios
//chamada assincrona - let employeesPromise guarda o resultado da chamada
//PROMISE: objeto que encapsula uma resposta futura

employeesPromise.then((resp) => {
    resp.json().then((employees) => {
        let table = renderTable(employees);
        document.getElementById("app").innerHTML = table;
    });
});

//gerar uma tabela
function renderTable(employees) {
    let rows = employees.map(employee => {
        return `<tr><td>${employee.id}</td><td>${employee.name}</td></tr>`;
    });
    return `<table>${rows.join("")}</table>`;
}