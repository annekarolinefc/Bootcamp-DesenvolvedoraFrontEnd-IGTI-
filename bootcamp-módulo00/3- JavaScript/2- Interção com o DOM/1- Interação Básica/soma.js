var n1 = document.getElementById('n1');
var n2 = document.getElementById('n2');
var r = document.getElementById('r');

function soma() {
    var resultado = n1.valueAsNumber + n2.valueAsNumber;
    r.textContent = isNaN(resultado) ? '' : resultado;
    console.log(`Variável 1: ${n1.valueAsNumber}`)
    console.log(`Variável 2: ${n2.valueAsNumber}`)
    console.log(`Resultado da soma: ${r.textContent}`)
}