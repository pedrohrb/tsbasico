//Uma struct do rust
//Exportando uma interface para outros arquivos
export interface Usuario {
    nome: string,
    idade: number,
    ativo?: boolean
}
        //Interface vira um "tipo"
let user: Usuario = {
    nome: "Pedro",
    idade: 13,
    ativo: true
}
