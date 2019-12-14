                    //Faz ser um array
// a: [tipocampos] [] = [ [campo , valor ], [ campo, valor] ]
let a: [string,any,number] [] = [
    ['url','http://localhost',22323],
    ['port',8080,1231]
]

function funcao() {
    a.forEach(element => {
        console.log(element[0] + " : " + element[1])
    });
}

funcao()

//ENUMS

// rust ;-;
enum CardSuits {                //Sem valor = 0
    Clubs = "a",Hearths = 2,Spades,Diamonds = "lala2"
}

function funcao2(){
    console.log(CardSuits.Clubs)
}
funcao2()
