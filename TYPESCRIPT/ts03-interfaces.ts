interface Persona {
    nombre: string,
    apellido: string,
}
let empleado: Persona = {
    nombre: "Bot",
    apellido: "Marley"
}
console.log('empleado:', empleado);

interface Credenciales {
    clave:string,
    usuario: string,
}
function login(credencial: Credenciales): void {
    console.log("Biemvenido:", credencial.usuario);
}
let miUsuario: Credenciales = {
    clave: "123",
    usuario: "Jesus"
}
login(miUsuario);

//hacer una interface figura que tenga base, altura y tipo de figura (cuadrado y rectangulo ) se pase a una funcuion segun el tipo que se le calgule el area
// Definimos el enum para los tipos de figuras
enum TipoFigura {
    CUADRADO = "cuadrado",
    RECTANGULO = "rectangulo"
}
interface Figura {
    base: number;
    altura: number;
    tipo: TipoFigura;
}
function calcularArea(figura: Figura): number {
    return figura.tipo === TipoFigura.CUADRADO 
        ? figura.base * figura.base 
        : figura.base * figura.altura;
}
let cuadrado: Figura = {
    base: 5,
    altura: 5,
    tipo: TipoFigura.CUADRADO
};
let rectangulo: Figura = {
    base: 4,
    altura: 6,
    tipo: TipoFigura.RECTANGULO
};
console.log("Área del cuadrado:", calcularArea(cuadrado));      
console.log("Área del rectángulo:", calcularArea(rectangulo));  