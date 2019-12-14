var Default = /** @class */ (function () {
    //Array<tipo>
    function Default() {
        //chame os metodos dentro do constructor
        this.metodo();
        this.array = [{
                teste: "teste"
            }];
    }
    //msm coisa que func
    Default.prototype.metodo = function () {
        //This se refere a classe
        this.numero = 10;
        this.texto = "Este \u00E9 um alert simples em TypeScript " + this.numero;
        return console.log(this.texto);
    };
    return Default;
}());
