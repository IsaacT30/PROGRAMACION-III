let cantidad: number = 19;
let nombre: string = "jOSE ZAMBRANO";
let opcion: boolean = true;
console.log('cantidad', cantidad);
console.log('nombre', nombre);
console.log('opcion', opcion);

let opcional: any = "comodin any";

opcional = 100;

let equipos: string[] = ["Barcelona", "Real Madrid", "ecuador", "vino tinto","la liga"];
console.log("equipos",  equipos);
let edades: Array<number> = [10, 12, 23, 456]
console.log("edades",  edades);


let persona: [string, number] = ["Pedro", 616161];
console.log("Alumnoa",persona);

enum Estados {
    PENDIENTE,
    ENVIADO,
    ENTREGADO,
}

let miEstado: Estados = Estados.ENTREGADO;
console.log(miEstado);


let cantidadProductos: number = 25;
let nombreTienda: string = "NBA Store";
let estaAbierto: boolean = true;

console.log("Cantidad de productos:", cantidadProductos);
console.log("Nombre de la tienda:", nombreTienda);
console.log("¿Está abierta la tienda?", estaAbierto);


let productoGenerico: any = "Camiseta Lakers";
productoGenerico = 129.99;


let equiposNBA: string[] = ["Lakers", "Warriors", "Celtics", "Bulls", "Heat"];
console.log("Equipos NBA:", equiposNBA);

let preciosProductos: Array<number> = [89.99, 129.99, 59.99, 149.99];
console.log("Precios de productos:", preciosProductos);


let productoDestacado: [string, number] = ["Camiseta de LeBron James", 129.99];
console.log("Producto destacado:", productoDestacado);


enum EstadoPedido {
    PENDIENTE,
    ENVIADO,
    ENTREGADO,
    CANCELADO,
}

let estadoActual: EstadoPedido = EstadoPedido.ENVIADO;
console.log("Estado del pedido:", estadoActual)