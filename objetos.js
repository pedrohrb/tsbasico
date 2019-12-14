// obj = chave : valor
// obj: {chaves:tipo} = {chave: valor}
var obj = {
    name: "Julio Cesar",
    age: 25
};
// melhor forma
//Chave de tipo string 
//Valor qualquer
var obj2 = {
    nome: "Pedro",
    idade: 13,
    apartamento: true
};
function funcao() {
    console.log(obj2.nome + obj2.idade + obj2.apartamento);
}
funcao();
//Funções com parametros
//Igual rust param: valor
function fun(nome, sobrenome) {
    if (sobrenome == undefined) {
        console.log(nome);
    }
    else {
        console.log(nome + " " + sobrenome);
    }
}
fun('Pedro');
