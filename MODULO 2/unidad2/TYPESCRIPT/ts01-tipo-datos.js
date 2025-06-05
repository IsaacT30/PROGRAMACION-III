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




//trabajo 

var edad = 25;
var usuario = "Isaac López";
var activo = false;
console.log('Edad:', edad);
console.log('Usuario:', usuario);
console.log('Activo:', activo);

var datoExtra = "dato adicional";
datoExtra = 2024;

// tipos de datos compuestos 
var deportes = ["Fútbol", "Baloncesto", "Tenis", "Natación"];
console.log("Deportes:", deportes);

var notas = [8.5, 9.2, 7.8, 10];
console.log("Notas:", notas);

// tuplas
var usuarioInfo = ["María", 987654];
console.log("Usuario info:", usuarioInfo);

// enums
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles[Roles["EDITOR"] = 1] = "EDITOR";
    Roles[Roles["VISITANTE"] = 2] = "VISITANTE";
})(Roles || (Roles = {}));
var miRol = Roles.EDITOR;
console.log("Rol:", miRol);