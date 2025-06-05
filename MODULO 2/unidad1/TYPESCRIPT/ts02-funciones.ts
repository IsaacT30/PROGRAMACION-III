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


function obtenerEdad(edad: number = 18): string {
    return `Mi edad es: ${edad}`;
}
console.log(obtenerEdad(25));
console.log(obtenerEdad());


const sumar = (a: number, b: number): number => {
    return a + b;
}
console.log("La suma es: ", sumar(5, 10));


function mostrarInformacion(informacion: string): void {
    console.log(informacion);
}
mostrarInformacion("Suceso en norte de Quito");


let operacion: (x: number, y: number) => number;
operacion = function(a, b) {
    return a + b;
}
console.log("Resultado suma: ", operacion(5, 10));



function saludarCliente(nombre: string): string {
    return `Bienvenido a la NBA Store, ${nombre}`;
}
console.log(saludarCliente("Michael Jordan"));


function mostrarEquipoFavorito(equipo?: string): string {
    return `Tu equipo favorito es: ${equipo ?? "no especificado"}`;
}
console.log(mostrarEquipoFavorito("Lakers"));
console.log(mostrarEquipoFavorito());


function calcularDescuento(porcentaje: number = 10): string {
    return `Descuento aplicado: ${porcentaje}%`;
}
console.log(calcularDescuento(20));
console.log(calcularDescuento());

const calcularTotal = (precio: number, cantidad: number): number => {
    return precio * cantidad;
}
console.log("Total a pagar:", calcularTotal(120, 3));


function mostrarMensaje(mensaje: string): void {
    console.log(mensaje);
}
mostrarMensaje("Nueva camiseta de los Warriors disponible.");


let procesarPago: (monto: number, impuesto: number) => number;
procesarPago = function(subtotal, tax) {
    return subtotal + tax;
}
console.log("Total con impuestos:", procesarPago(200, 24));
