// Función básica
function saludar(nombre: string): string {
    return `Hola ${nombre}`;
}
console.log(saludar("Betty Marmol")); 

// Parámetros opcionales
function obtenerApellido(apellido?: string): string {
    return `Mi apellido es: ${apellido ?? "invitado"}`;
}
console.log(obtenerApellido("Picapiedra"));
console.log(obtenerApellido()); 

// Parámetros por defecto
function obtenerEdad(edad: number = 18): string {
    return `Mi edad es: ${edad}`;
}
console.log(obtenerEdad(25));
console.log(obtenerEdad());

// Función de flecha
const sumar = (a: number, b: number): number => {
    return a + b;
}
console.log("La suma es: ", sumar(5, 10));

// Función que no retorna nada (void)
function mostrarInformacion(informacion: string): void {
    console.log(informacion);
}
mostrarInformacion("Suceso en norte de Quito");

// Tipar funciones como variables
let operacion: (x: number, y: number) => number;
operacion = function(a, b) {
    return a + b;
}
console.log("Resultado suma: ", operacion(5, 10));

// Función que recibe
