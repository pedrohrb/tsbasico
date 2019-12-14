//Faz ser um array
// a: [tipocampos] [] = [ [campo , valor ], [ campo, valor] ]
var a = [
    ['url', 'http://localhost', 22323],
    ['port', 8080, 1231]
];
function funcao() {
    a.forEach(function (element) {
        console.log(element[0] + " : " + element[1]);
    });
}
funcao();
//ENUMS
// rust ;-;
var CardSuits;
(function (CardSuits) {
    CardSuits["Clubs"] = "a";
    CardSuits[CardSuits["Hearths"] = 2] = "Hearths";
    CardSuits[CardSuits["Spades"] = 3] = "Spades";
    CardSuits["Diamonds"] = "lala2";
})(CardSuits || (CardSuits = {}));
function funcao2() {
    console.log(CardSuits.Clubs);
}
funcao2();
