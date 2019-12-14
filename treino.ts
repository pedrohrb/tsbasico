
let lista: {[key: string]: any} = {
    nome: '',
    idade: 0,
    casado: false
}
function listar(name: String , idade: Number , casado: boolean){
    let nome = lista.nome = name
    let idad = lista.idade = idade
    let casad = lista.casado = casado

    if(casad == true){
        console.log("Nome: " + nome + " Idade: " + idad + " Casado?: Sim" )
    }else{
        console.log("Nome: " + nome + " Idade: " + idad + " Casado?: Não" )
    }
}

listar('Pedro',13,true)
