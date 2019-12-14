var lista = {
    nome: '',
    idade: 0,
    casado: false
};
function listar(name, idade, casado) {
    var nome = lista.nome = name;
    var idad = lista.idade = idade;
    var casad = lista.casado = casado;
    if (casad == true) {
        console.log("Nome: " + nome + " Idade: " + idad + " Casado?: Sim");
    }
    else {
        console.log("Nome: " + nome + " Idade: " + idad + " Casado?: Não");
    }
}
listar('Pedro', 13, true);
