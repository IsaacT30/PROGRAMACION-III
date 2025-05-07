var empleado = {
    nombre: "Bot",
    apellido: "Marley"
};
console.log('empleado:', empleado);
function login(credencial) {
    console.log("Biemvenido:", credencial.usuario);
}
var miUsuario = {
    clave: "123",
    usuario: "Jesus"
};
login(miUsuario);
//hacer una interface figura que tenga base, altura y tipo de figura (cuadrado y rectangulo ) se pase a una funcuion segun el tipo que se le calgule el area
// Definimos el enum para los tipos de figuras
var TipoFigura;
(function (TipoFigura) {
    TipoFigura["CUADRADO"] = "cuadrado";
    TipoFigura["RECTANGULO"] = "rectangulo";
})(TipoFigura || (TipoFigura = {}));
function calcularArea(figura) {
    return figura.tipo === TipoFigura.CUADRADO
        ? figura.base * figura.base
        : figura.base * figura.altura;
}
var cuadrado = {
    base: 5,
    altura: 5,
    tipo: TipoFigura.CUADRADO
};
var rectangulo = {
    base: 4,
    altura: 6,
    tipo: TipoFigura.RECTANGULO
};
console.log("Área del cuadrado:", calcularArea(cuadrado));
console.log("Área del rectángulo:", calcularArea(rectangulo));
