var m = 'Olá '; //definida no escopo global
imprimeOla();

function imprimeOla() {
    var nome = 'Danilo';
    console.log(m);
    console.log(nome);
    imprimeOla2();

    function imprimeOla2() {
        console.log(m);
        console.log(nome);
    }
}