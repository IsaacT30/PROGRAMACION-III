function saludarPersona(nombre) {
    return Hola;
    $;
    {
        nombre;
    }
    ;
}
console.log(saludarPersona("betty Marmol"));
function obtenerapellidos(apellido) {
    return mi;
    apellido, $;
    {
        apellido !== null && apellido !== void 0 ? apellido : "invitado";
    }
    ;
}
console.log(obtenerapellidos("picapiedra"));
console.log(obtenerapellidos());
function obteneredad(edad) {
    if (edad === void 0) { edad = 18; }
    return mi;
    edad;
    es;
    $;
    {
        edad;
    }
    ;
}
console.log(obteneredad(25));
console.log(obteneredad());
var sumar = function (a, b) {
    return a + b;
};
console.log("la suma es", sumar(5, 4));
function mostrarInformacion(informacion) {
    console.log(informacion);
}
mostrarInformacion("suceso en el norte de quito");
var operacion;
operacion = function (a, b) {
    return a + b;
};
console.log(operacion(5, 4));
function saludarGrupo(personas) {
    for (var i = 0; i < personas.length; i++) {
        console.log("Hola " + personas[i]);
    }
}
var grupo = ["Pedro", "Juan", "María"];
saludarGrupo(grupo);



//trabajo

function saludarPersona(nombre) {
    return "Hola " + nombre;
}
console.log(saludarPersona("Carlos Pérez"));

function obtenerApellidos(apellido) {
    return apellido !== undefined ? apellido : "invitado";
}
console.log(obtenerApellidos("García"));
console.log(obtenerApellidos());

function obtenerEdad(edad) {
    if (edad === undefined) { edad = 21; }
    return "Mi edad es " + edad;
}
console.log(obtenerEdad(35));
console.log(obtenerEdad());

var sumar = function (a, b) {
    return a + b;
};
console.log("la suma es", sumar(10, 7));

function mostrarInformacion(informacion) {
    console.log(informacion);
}
mostrarInformacion("Evento en el sur de Guayaquil");

var operacion;
operacion = function (a, b) {
    return a * b;
};
console.log("El producto es", operacion(6, 3));

function saludarGrupo(personas) {
    for (var i = 0; i < personas.length; i++) {
        console.log("Hola " + personas[i]);
    }
}
var grupo = ["Lucía", "Andrés", "Sofía"];
saludarGrupo(grupo);