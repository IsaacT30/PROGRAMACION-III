
let cantidad1: number = 19;
let nombre1: string = "jOSE ZAMBRANO";
let opcion1: boolean = true;
console.log('cantidad', cantidad1);
console.log('nombre', nombre1);
console.log('opcion', opcion1);

// tipos de datos compuestos 
let equipos1: string[] = ["Barcelona", "Real Madrid", "ecuador", "vino tinto", "la liga"];
console.log("equipos", equipos1);
let edades1: Array<number> = [10, 12, 23, 456];
console.log("edades", edades1);

// tuplas
let persona1: [string, number] = ["Pedro", 616161];
console.log("Alumnoa", persona1);

//enums
enum Estados1 {
    PENDIENTE,
    ENVIADO,
    ENTREGADO,
}

let miEstado1: Estados1 = Estados1.ENTREGADO;
console.log(miEstado1);


// trabajo

let edad2: number = 28;
let usuario2: string = "Isaac López";
let activo2: boolean = false;
console.log('edad', edad2);
console.log('usuario', usuario2);
console.log('activo', activo2);

// tipos de datos compuestos 
let deportes2: string[] = ["Fútbol", "Baloncesto", "Tenis", "Natación"];
console.log("deportes", deportes2);
let notas2: Array<number> = [8.5, 9.2, 7.8, 10];
console.log("notas", notas2);

// tuplas
let usuarioInfo2: [string, number] = ["María", 987654];
console.log("Usuario info", usuarioInfo2);

//enums
enum Roles2 {
    ADMIN,
    EDITOR,
    VISITANTE,
}

let miRol2: Roles2 = Roles2.EDITOR;
console.log(miRol2);