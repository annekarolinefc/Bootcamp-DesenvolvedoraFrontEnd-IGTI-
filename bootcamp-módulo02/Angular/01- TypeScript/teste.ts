//-----DECLARANDO TIPOS -----//

function soma(a: number, b: number): number{
    return a+b;
} //Função soma recebe um parâmetro a do tipo number, b do tipo number e retorna uma soma do tipo number

//soma("ola", 5); // ->compilador avisa que está errado
soma(2,3);

function imprime(x:boolean[]){
    //array de boolean
}

//-----VARIAVEL DO TIPO ANY -----//
function soma2(a, b){
    return a+b;
} //nao foi informado o tipo -> por padrão o typescrip entende como any
soma2("Olá", 2);

//-----TYPESCRIPT INFETINDO O TIPO -----//
let x = 5;
soma(x, 4); //o compilador entende que x é um number

//----- DECLARAR TIPOS DE OBJETOS -----//
function cadastraAluno(aluno:{matricula:number, nome:string}){

}

cadastraAluno({matricula:123, nome:'João'})
//APRENSETA ERRO cadastraAluno({matricula:'123', nome:'João'})

//----- DECLARAR INTERFACES -----//
interface Aluno {
    
}
//----- DECLARAR CLASSES -----//
