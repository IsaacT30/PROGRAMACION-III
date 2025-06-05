//trabajo 
// Función básica
function saludar(nombre: string): string {
    return `Hola ${nombre}`;
}
console.log(saludar("Carlos Pérez")); 

// Parámetros opcionales
function obtenerApellido(apellido?: string): string {
    return `Mi apellido es: ${apellido ?? "invitado"}`;
}
console.log(obtenerApellido("García"));
console.log(obtenerApellido()); 

// Parámetros por defecto
function obtenerEdadUsuario(edad: number = 21): string {
    return `Mi edad es: ${edad}`;
}
console.log(obtenerEdadUsuario(35));
console.log(obtenerEdadUsuario());

// Función de flecha
const sumarNumeros = (a: number, b: number): number => {
    return a + b;
}
console.log("La suma es: ", sumarNumeros(10, 7));

// Función que no retorna nada (void)
function mostrarInformacion2(informacion: string): void {
    console.log(informacion);
}
mostrarInformacion2("Evento en el sur de Guayaquil");

// Tipar funciones como variables
let operacion2: (x: number, y: number) => number;
operacion2 = function(a, b) {
    return a * b;
}
console.log("El producto es: ", operacion2(6, 3));

// Función que recibe un arreglo
function saludarGrupo2(personas: string[]): void {
    for (let i = 0; i < personas.length; i++) {
        console.log("Hola " + personas[i]);
    }
}
let grupo2: string[] = ["Lucía", "Andrés", "Sofía"];
saludarGrupo2(grupo2);


