var Nba = /** @class */ (function () {
    function Nba(nombre, paginas) {
        this.nombre = nombre;
        this.paginas = paginas;
    }
    Nba.prototype.cantidadPaginas = function () {
        return "Cantidad de p\u00E1ginas del libro: ".concat(this.paginas);
    };
    return Nba;
}());
var nbaLibro = new Nba("Nba 2k", 350);
console.log(nbaLibro.nombre);
console.log(nbaLibro.cantidadPaginas());