var cantidad = 19;
var nombre = "jOSE ZAMBRANO";
var opcion = true;
console.log('cantidad', cantidad);
console.log('nombre', nombre);
console.log('opcion', opcion);
var opcional = "comodin any";
opcional = 100;
// tipos de datos compuestos 
var equipos = ["Barcelona", "Real Madrid", "ecuador", "vino tinto", "la liga"];
console.log("equipos", equipos);
var edades = [10, 12, 23, 456];
console.log("edades", edades);
// tuplas
var persona = ["Pedro", 616161];
console.log("Alumnoa", persona);
//enums
var Estados;
(function (Estados) {
    Estados[Estados["PENDIENTE"] = 0] = "PENDIENTE";
    Estados[Estados["ENVIADO"] = 1] = "ENVIADO";
    Estados[Estados["ENTREGADO"] = 2] = "ENTREGADO";
})(Estados || (Estados = {}));
var miEstado = Estados.ENTREGADO;
console.log(miEstado);
