let cantidad: number = 19;
let nombre: string = "jOSE ZAMBRANO";
let opcion: boolean = true;
console.log('cantidad', cantidad);
console.log('nombre', nombre);
console.log('opcion', opcion);

let opcional: any = "comodin any";

opcional = 100;

// tipos de datos compuestos 

let equipos: string[] = ["Barcelona", "Real Madrid", "ecuador", "vino tinto","la liga"];
console.log("equipos",  equipos);
let edades: Array<number> = [10, 12, 23, 456]
console.log("edades",  edades);

// tuplas
let persona: [string, number] = ["Pedro", 616161];
console.log("Alumnoa",persona);

//enums
enum Estados {
    PENDIENTE,
    ENVIADO,
    ENTREGADO,
}

let miEstado: Estados = Estados.ENTREGADO;
console.log(miEstado);