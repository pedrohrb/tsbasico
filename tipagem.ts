class Default{
    qualquer: any // qualquer valor
    //Var: tipo igual rust
    texto: string  // String
    numero: number  // INT FLOAT
    bollean: boolean // BOOL
    array: Array<any> // ARRAY
            //Array<tipo>
    

    constructor() {
        //chame os metodos dentro do constructor
        this.metodo()
        this.array = [{  // array com json chave valor 
            teste: "teste"
        }]
    }

    //msm coisa que func
    metodo() {
            //This se refere a classe
        this.numero = 10
        this.texto = `Este é um alert simples em TypeScript ${this.numero}`
        
        return console.log(this.texto)
    }
}