class NbaLibro {
    public nombre: string;
    private paginas: number;

    constructor(nombre: string, paginas: number) {
        this.nombre = nombre;
        this.paginas = paginas;
    }

    cantidadPaginas(): string {
        return `Cantidad de páginas del libro: ${this.paginas}`;
    }
}

const nba = new NbaLibro("Nba 2k", 350);
console.log(nba.nombre);
console.log(nba.cantidadPaginas());